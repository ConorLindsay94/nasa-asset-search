import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import HomeSearch from './HomeSearch';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    setQueryString: jest.fn(),
    setMediaTypes: jest.fn(),
    setResults: jest.fn(),
    history: { push: jest.fn() },
  };
  const homeSearchWrapper = shallow(<HomeSearch {...props} />);

  return {
    props,
    homeSearchWrapper,
  };
}

describe('Home Search Component', () => {
  test('component renders', () => {
    const { homeSearchWrapper } = setup();

    expect(homeSearchWrapper.exists()).toBe(true);
  });

  test('setQueryString is called on mount', () => {
    const { props } = setup();

    expect(props.setQueryString.mock.calls.length).toBe(1);
  });

  test('handleChange() sets searchText in state', () => {
    const { homeSearchWrapper } = setup();
    const handleInputChange = jest.spyOn(homeSearchWrapper.instance(), 'handleInputChange');

    handleInputChange({target: {value: ''}});
    expect(homeSearchWrapper.state().searchText).toEqual(null);
    handleInputChange({ target: { value: 'Test' }});
    expect(homeSearchWrapper.state().searchText).toEqual('Test');
  });

  test('handleCheckboxChange() sets mediaTypes in state and fires action', () => {
    const { homeSearchWrapper, props } = setup();
    const handleCheckboxChange = jest.spyOn(homeSearchWrapper.instance(), 'handleCheckboxChange');

    handleCheckboxChange({ target: { checked: true } }, 'audio');
    expect(homeSearchWrapper.state().mediaTypes).toEqual(
      [
        { type: 'image', value: true, prettyName: 'Images'},
        { type: 'audio', value: true, prettyName: 'Audio'},
        { type: 'video', value: false, prettyName: 'Videos'},
      ],
    );
    expect(props.setMediaTypes.mock.calls.length).toBe(1);
  });

  test('handleSubmit() redirects to search route', () => {
    const { homeSearchWrapper, props } = setup();
    const handleSubmit = jest.spyOn(homeSearchWrapper.instance(), 'handleSubmit');

    handleSubmit({ preventDefault: jest.fn() });
    expect(props.history.push).toHaveBeenCalledTimes(1);
  });

  test('error displays if there are no media types selected', () => {
    const { homeSearchWrapper } = setup();
    const handleCheckboxChange = jest.spyOn(homeSearchWrapper.instance(), 'handleCheckboxChange');

    handleCheckboxChange({ target: { checked: false } }, 'image');
    expect(homeSearchWrapper.state().mediaTypes).toEqual(
      [
        { type: 'image', value: false, prettyName: 'Images'},
        { type: 'audio', value: false, prettyName: 'Audio'},
        { type: 'video', value: false, prettyName: 'Videos'},
      ],
    );
    expect(homeSearchWrapper.find('.error--display')).toHaveLength(1);
  });
});