import React from 'react';
import PropTypes from 'prop-types';

function SearchBar (props) {
  return (
    <div className="input-wrapper">
      <input 
        id="nasa-home-search"
        type="text"
        className="input-wrapper__input"
        onChange={props.handleInputChange}
        value={props.searchText || ''}
      />
      <button
        type="submit"
        className={props.searchText ? 
          "input-wrapper__submit input-wrapper__submit--active" :
          "input-wrapper__submit"
        }
        disabled={props.searchText ?
          "" : "disabled"
        }
      >
        <svg>
          <title>Search Icon</title>
          <desc>A magnifying glass icon to indicate button is to be used to search.</desc>
          <use xlinkHref="#icon-search"></use>
        </svg>
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  handleInputChange: PropTypes.func,
  checkboxSelected: PropTypes.func,
};

export default SearchBar;
  


