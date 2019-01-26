import React, { Component } from 'react';
import createMediaArray from '../../util/create-media-array';
import Checkbox from '../Checkbox/Checkbox';

class SearchResults extends Component {

  constructor(props) {
    super(props);

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentDidMount() {
    this.fetchResults();
  }

  componentDidUpdate(prevProps) {
    if (
        (this.props.location.state.media !== prevProps.location.state.media) ||
        (this.props.location.state.query !== prevProps.location.state.query)
      ) {
      this.fetchResults();
    }
  }

  fetchResults() {
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

      this.props.setQueryString(q);
      this.props.setMediaTypes([...media]);
  
      setTimeout(() => {
        // Allow time for header animations to finish
        this.props.searchQuery({ q, 'media_type': selectedMediaTypes.map(type => type.type) });
      }, 500);
    }
  }

  handleCheckboxChange(e, typeName) {
    let mediaTypes = this.props.mediaTypes;
    let mediaType = mediaTypes.find(type => type.type === typeName);
    const typeIdx = mediaTypes.findIndex(type => type.type === typeName);

    mediaType.value = e.target.checked;

    mediaTypes.splice(typeIdx, 1, mediaType);

    this.props.setMediaTypes(mediaTypes);
  }

  render() {
    const { results, mediaTypes } = this.props;
    return (
      <section className="search">
        <div className="search__filter">
          <h2>Filter</h2>
          <div className="search__filter__checkboxes">  
            {mediaTypes ?
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
              )) : null
            }
          </div>
        </div>
        <div className="search__results">
          {
            results ?
              results.items.filter(item => item.links).map(item => (
                <article 
                  key={item.data[0]['nasa_id']}
                  className="search__results__item"
                >
                  <div className="search__results__item-image">
                    <img src={item.links[0].href} />
                  </div>
                  <label>{item.data[0].title}</label>
                </article>
              )) : <p>Loading...</p>
          }
        </div>
      </section>
    )
  }

}

export default SearchResults;