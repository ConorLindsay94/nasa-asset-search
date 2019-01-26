import React, { Component } from 'react';

class SearchResults extends Component {

  componentDidMount() {
    this.fetchResults();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.state.media !== prevProps.location.state.media) {
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
        this.props.location.state.media;
      const q = this.props.queryString || this.props.location.state.query;

      this.props.setQueryString(q);
      this.props.setMediaTypes([...media]);
  
      setTimeout(() => {
        // Allow time for header animations to finish
        this.props.searchQuery({ q, 'media_type': media });
      }, 500);
    }
  }

  render() {
    const { queryString, results } = this.props;
    return (
      <section className="search">
        <div className="search__filter">
          <h2>Query: "{queryString}"</h2>
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