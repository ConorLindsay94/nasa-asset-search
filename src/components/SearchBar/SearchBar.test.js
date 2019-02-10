import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    handleInputChange: jest.fn(),
    searchText: '',
    mediaTypes: [
      { type: 'image', value: true, prettyName: 'Images'},
      { type: 'audio', value: false, prettyName: 'Audio'},
      { type: 'video', value: false, prettyName: 'Videos'},
    ],
  };
  const searchBarWrapper = shallow(<SearchBar {...props} />);

  return {
    props,
    searchBarWrapper,
  };
}

describe('Search Bar Component', () => {
  test('component renders', () => {
    const { searchBarWrapper } = setup();

    expect(searchBarWrapper).toHaveLength(1);
  });

  test('submit button is initially disabled', () => {
    const { searchBarWrapper } = setup();

    expect(searchBarWrapper.find('button').prop('disabled')).toEqual('disabled');
  });
});