import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import SearchResults from './SearchResults';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.useFakeTimers();

function setup() {
  const props = {
    setQueryString: jest.fn(),
    setMediaTypes: jest.fn(),
    setResults: jest.fn(),
    setActiveItem: jest.fn(),
    searchQuery: jest.fn(),
    queryString: '',
    mediaTypes: [
      { type: 'image', value: true, prettyName: 'Images' },
      { type: 'audio', value: false, prettyName: 'Audio' },
      { type: 'video', value: false, prettyName: 'Videos' },
    ],
    history: { push: jest.fn() },
    location: { 
      state: {
        query: 'Test',
        media: ['image'],
      } 
    },
  };
  const searchResultsWrapper = shallow(<SearchResults {...props} />);

  return {
    props,
    searchResultsWrapper,
  };
}

describe('Search Results Component', () => {
  test('component renders and search query is dispatched from location state', () => {
    const { searchResultsWrapper, props } = setup();

    expect(searchResultsWrapper).toHaveLength(1);
    expect(props.setResults).toHaveBeenCalledWith(null);
    expect(props.setQueryString).toHaveBeenCalledWith(props.location.state.query);
    expect(props.setMediaTypes).toHaveBeenCalledWith(props.mediaTypes);

    jest.runAllTimers();
    expect(props.searchQuery).toHaveBeenCalledWith({
      q: props.location.state.query,
      'media_type': props.location.state.media,
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });

  test('loading state is rendered while there are no results', () => {
    const { searchResultsWrapper } = setup();

    expect(searchResultsWrapper.find('.spinner')).toHaveLength(1);
  });

  test('results are rendered when results prop has value', () => {
    const { searchResultsWrapper, props } = setup();

    searchResultsWrapper.setProps({ 
      results: {
        items: [
          {
            data: [
              {
                'nasa_id': 'test_1',
                title: 'test 1'
              },
            ]
          },
          {
            data: [
              {
                'nasa_id': 'test_2',
                title: 'test 2'
              },
            ]
          },
          {
            data: [
              {
                'nasa_id': 'test_3',
                title: 'test 3'
              },
            ]
          },
        ]
      },
      ...props,
    });

    expect(searchResultsWrapper.find('.search__results-link')).toHaveLength(3);
  });

  test('handleClick() takes item and redirects to asset page', () => {
    const { searchResultsWrapper, props } = setup();
    const handleClick = jest.spyOn(searchResultsWrapper.instance(), 'handleClick');
    const item = {
      data: [
        {
          'nasa_id': 'test_1',
          title: 'test 1'
        },
      ]
    };

    searchResultsWrapper.setProps({
      results: {
        items: [item]
      },
      ...props,
    });

    searchResultsWrapper.find('.search__results-link').simulate('click');
    expect(handleClick).toHaveBeenCalledWith(item);
    expect(props.setActiveItem).toHaveBeenCalledWith(item);
    expect(props.history.push).toHaveBeenCalledTimes(1);
  });

  test('handleCheckboxChange() dispatches setMediaTypes action and fires fetchResults again', () => {
    const { searchResultsWrapper, props } = setup();
    const handleCheckboxChange = jest.spyOn(searchResultsWrapper.instance(), 'handleCheckboxChange');
    const fetchResults = jest.spyOn(searchResultsWrapper.instance(), 'fetchResults');

    handleCheckboxChange({ target: { checked: true } }, 'audio');
    expect(props.setMediaTypes).toHaveBeenCalled();
    expect(fetchResults).toHaveBeenCalled();
  });
});
