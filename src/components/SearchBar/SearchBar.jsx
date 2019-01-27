import React from 'react';
import PropTypes from 'prop-types';
import checkboxSelected from '../../util/checkbox-selected';

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
        className={props.searchText && checkboxSelected(props.mediaTypes) ? 
          "input-wrapper__submit input-wrapper__submit--active" :
          "input-wrapper__submit"
        }
        disabled={props.searchText && checkboxSelected(props.mediaTypes) ?
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
  searchText: PropTypes.string,
  mediaTypes: PropTypes.array.isRequired,
};

export default SearchBar;
  


