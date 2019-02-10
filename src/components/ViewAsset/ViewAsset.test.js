import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ViewAsset from './ViewAsset';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.scrollTo = jest.fn();

function setup() {
  const props = {
    history: { 
      push: jest.fn(),
      goBack: jest.fn(),
    },
  };
  const viewAssetWrapper = shallow(<ViewAsset {...props} />);

  return {
    props,
    viewAssetWrapper,
  };
}

describe('View Asset Component', () => {
  test('component renders', () => {
    const { viewAssetWrapper } = setup();

    expect(viewAssetWrapper).toHaveLength(1);
  });

  test('user is redirected to home page if there is no activeItem', () => {
    const { props } = setup();
    
    expect(props.history.push).toHaveBeenCalled();
  });

  test('asset is only displayed if there is an activeItem set in props', () => {
    const { viewAssetWrapper, props } = setup();

    expect(viewAssetWrapper.find('.view-asset__asset')).toHaveLength(0);
    viewAssetWrapper.setProps({
      activeItem: {
        data: [
          {
            'nasa_id': 'test_1',
            title: 'This is a test',
            description: 'This is a test description',
            'date_created': '2019-02-10 00:00:00Z',
          },
        ],
      },
      ...props,
    });
    expect(viewAssetWrapper.find('.view-asset__asset')).toHaveLength(1);
  });

  test('h1 on page comes from activeItem title', () => {
    const { viewAssetWrapper, props } = setup();

    viewAssetWrapper.setProps({
      activeItem: {
        data: [
          {
            'nasa_id': 'test_1',
            title: 'This is a test',
            description: 'This is a test description',
            'date_created': '2019-02-10 00:00:00Z',
          },
        ],
      },
      ...props,
    });

    expect(viewAssetWrapper.find('h1').text()).toEqual('This is a test');
  });

  test('back button calls goBack(), which then fires goBack on props.history', () => {
    const { viewAssetWrapper, props } = setup();
    const goBack = jest.spyOn(viewAssetWrapper.instance(), 'goBack');

    viewAssetWrapper.setProps({
      activeItem: {
        data: [
          {
            'nasa_id': 'test_1',
            title: 'This is a test',
            description: 'This is a test description',
            'date_created': '2019-02-10 00:00:00Z',
          },
        ],
      },
      ...props,
    });

    viewAssetWrapper.find('.view-asset__title__back').simulate('click');
    expect(goBack).toHaveBeenCalled();
    expect(props.history.goBack).toHaveBeenCalled();
  });
});