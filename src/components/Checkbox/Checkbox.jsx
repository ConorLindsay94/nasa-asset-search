import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Checkbox (props) {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          type="checkbox"
          onChange={(e) => props.handleCheckboxChange(e, props.typeText)}
          checked={props.type}
        />
    </Fragment>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func,
  typeText: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
};

export default Checkbox;
  


