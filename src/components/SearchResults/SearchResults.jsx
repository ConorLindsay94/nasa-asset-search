import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createMediaArray from '../../util/create-media-array';
import determineContent from '../../util/determine-content';
import checkboxSelected from '../../util/checkbox-selected';
import Checkbox from '../Checkbox/Checkbox';

class SearchResults extends Component {

  constructor(props) {
    super(props);

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchResults(true);
  }

  componentDidUpdate(prevProps) {
    if (
        (this.props.location.state.media !== prevProps.location.state.media) ||
        (this.props.location.state.query !== prevProps.location.state.query)
      ) {
      this.fetchResults();
    }
  }

  fetchResults(firstLoad) {
    if (!this.props.location.state) {
      this.props.history.push({
        pathname: '/home',
      });
    } else {
      const media = this.props.mediaTypes ?
        this.props.mediaTypes :
        createMediaArray(this.props.location.state.media);
      const q = this.props.queryString || this.props.location.state.query;
      const selectedMediaTypes = media.filter(type => type.value);

      this.props.setResults(null);
      this.props.setQueryString(q);
      this.props.setMediaTypes([...media]);
  
      setTimeout(() => {
        // Allow time for header animations to finish
        this.props.searchQuery({ q, 'media_type': selectedMediaTypes.map(type => type.type) });
      }, firstLoad ? 500 : 0);
    }
  }

  handleCheckboxChange(e, typeName) {
    let mediaTypes = this.props.mediaTypes;
    let mediaType = mediaTypes.find(type => type.type === typeName);
    const typeIdx = mediaTypes.findIndex(type => type.type === typeName);

    mediaType.value = e.target.checked;

    mediaTypes.splice(typeIdx, 1, mediaType);

    this.props.setMediaTypes([...mediaTypes]);

    if (checkboxSelected(mediaTypes)) {
      this.fetchResults();
    }
  }

  handleClick(item) {
    this.props.setActiveItem(item);
    this.props.history.push({
      pathname: `/asset/${item.data[0]['media_type']}/${item.data[0]['nasa_id']}`,
    });
  }

  render() {
    const { results, mediaTypes } = this.props;
    return (
      <section className="search">
        {mediaTypes &&
          <div className="search__filter">
            <h2>Filter</h2>
            <div className="search__filter__checkbox-wrapper">
              <div className="search__filter__checkboxes">  
                {
                  mediaTypes.map(type => (
                    <div
                      className="search__filter__checkboxes-checkbox"
                      key={type.type}
                    >
                      <Checkbox
                        id={`nasa-${type.type}`}
                        label={type.prettyName}
                        handleCheckboxChange={this.handleCheckboxChange}
                        type={type.value}
                        typeText={type.type}
                      />
                    </div>
                  ))
                }
              </div>
              <div className="search__filter__message">
                <p 
                  className={`error ${!checkboxSelected(mediaTypes) ?'error--display' : ''}`}
                >
                  You must choose at least one type of asset.
                </p>
              </div>
            </div>
          </div>
        }
        <div className="search__results">
          {
            results ?
              results.items.length ?
                results.items.map(item => (
                  <div
                    className="search__results-link"
                    key={item.data[0]['nasa_id']}
                    onClick={() => this.handleClick(item)}
                  >
                    <article className="search__results__item">
                      {determineContent(item)}
                      <label>{item.data[0].title}</label>
                    </article>
                  </div>
                )) : <p className="search__results__message">Sorry, there are no results for this query.</p>
              : <div className="spinner"></div>
          }
        </div>
      </section>
    )
  }
}

SearchResults.propTypes = {
  queryString: PropTypes.string,
  mediaTypes: PropTypes.array.isRequired,
  results: PropTypes.shape({items: PropTypes.array}),
}

export default SearchResults;