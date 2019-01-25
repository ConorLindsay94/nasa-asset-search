import React, { Component } from 'react';

class HomeSearch extends Component {

  constructor() {
    super();

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value.length ?
        e.target.value : null
    });
  }

  render() {
    return (
      <section className="home-search">
        <form className="home-search__form">
          <label 
            htmlFor="nasa-home-search"
            className="home-search__form-label">
              What would you like to search for?
          </label>
          <div className="home-search__form-wrapper">
            <input 
              id="nasa-home-search"
              type="text"
              className="home-search__form-input"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className={this.state.searchText ? 
                "home-search__form-submit home-search__form-submit--active" :
                "home-search__form-submit"
              }
              disabled={this.state.searchText ?
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
        </form>
      </section>
    )
  }

}

export default HomeSearch;