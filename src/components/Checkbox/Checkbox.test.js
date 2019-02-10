import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Checkbox from './Checkbox';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const checkboxWrapper = shallow(
    <Checkbox 
      id="nasa-image"
      label="Image"
      type={false}
      typeText="image"
    />
  );

  return { checkboxWrapper };
}

describe('Checkbox Component', () => {
  test('component renders', () => {
    const { checkboxWrapper } = setup();
    expect(checkboxWrapper.exists()).toBe(true);
  });

  test('checkbox is rendered', () => {
    const { checkboxWrapper } = setup();
    const checkboxInput = checkboxWrapper.find('#nasa-image');

    expect(checkboxInput).toHaveLength(1);
  });

  test('checkbox has associated label', () => {
    const { checkboxWrapper } = setup();
    const assocLabel = checkboxWrapper.find('#nasa-image + label');

    expect(assocLabel).toHaveLength(1);
    expect(assocLabel.prop('htmlFor')).toEqual('nasa-image');
  });

  test('checkbox input has hidden class', () => {
    const { checkboxWrapper } = setup();
    const checkboxInput = checkboxWrapper.find('#nasa-image');

    expect(checkboxInput.prop('className')).toContain('hidden');
  });
})