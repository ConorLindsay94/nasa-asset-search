import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    setQueryString: jest.fn(),
    setMediaTypes: jest.fn(),
    setResults: jest.fn(),
    queryString: '',
    mediaTypes: [
      { type: 'image', value: true, prettyName: 'Images'},
      { type: 'audio', value: false, prettyName: 'Audio'},
      { type: 'video', value: false, prettyName: 'Videos'},
    ],
    history: { push: jest.fn() },
  };
  const headerWrapper = shallow(
    <Header {...props} />
  );

  return { headerWrapper, props };
}

describe('Header Component', () => {
  test('component renders', () => {
    const { headerWrapper } = setup();

    expect(headerWrapper).toHaveLength(1);
  });

  test('logo is rendered and redirects to home if clicked', () => {
    const { headerWrapper } = setup();

    expect(headerWrapper.find('use').prop('xlinkHref')).toEqual('#icon-logo');
    expect(headerWrapper.find('Link').prop('to')).toEqual('/home');
  });

  test('handleChange() sets searchText in state', () => {
    const { headerWrapper } = setup();
    const handleInputChange = jest.spyOn(headerWrapper.instance(), 'handleInputChange');

    handleInputChange({target: {value: ''}});
    expect(headerWrapper.state().searchText).toEqual(null);
    handleInputChange({ target: { value: 'Test' }});
    expect(headerWrapper.state().searchText).toEqual('Test');
  });

  test('header has active class and search bar renders in DOM when queryString has value', () => {
    const { headerWrapper, props } = setup();

    props.queryString = 'Test';
    headerWrapper.setProps({...props});
    headerWrapper.update();
    expect(headerWrapper.find('.header--active')).toHaveLength(1);
    expect(headerWrapper.find('.header__mini-search')).toHaveLength(1);
  });

  test('handleSubmit() sets query string, nulls out results and redirects to self so new search is initiated', () => {
    const { headerWrapper, props } = setup();
    const handleSubmit = jest.spyOn(headerWrapper.instance(), 'handleSubmit');

    headerWrapper.setState({ searchText: 'Test', ...headerWrapper.state() })
    handleSubmit({ preventDefault: jest.fn() });
    expect(props.setQueryString).toBeCalledWith(headerWrapper.state().searchText);
    expect(props.setResults).toBeCalledWith(null);
    expect(props.history.push).toHaveBeenCalledTimes(1);
  });
});
