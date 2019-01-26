import React, { Component } from 'react';

class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const media = this.props.mediaTypes.map(type => type.type);

    setTimeout(() => {
      // Allow time for header animations to finish
      this.props.searchQuery({ q: this.props.queryString, 'media_type': media });
    }, 500);
  }

  render() {
    const { queryString, results } = this.props;
    return (
      <section className="search">
        <h2>Query: "{queryString}"</h2>
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