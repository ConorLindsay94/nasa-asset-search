import React, { Component } from 'react';

class HomeSearch extends Component {

  constructor() {
    super();

    this.state = {
      images: true,
      audio: false,
      video: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      searchText: e.target.value.length ?
        e.target.value : null,
    });
  }

  handleCheckboxChange(e, type) {
    this.setState({
      [type]: e.target.checked,
    })
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
              onChange={this.handleInputChange}
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
          <div className="home-search__form-checkboxes">
              <div className="home-search__form-checkboxes__checkbox">
                <label htmlFor="nasa-images">Images</label>
                <input
                  type="checkbox"
                  onChange={(e) => this.handleCheckboxChange(e, 'images')}
                  checked={this.state.images}
                />
              </div>
              <div className="home-search__form-checkboxes__checkbox">
                <label htmlFor="nasa-images">Audio</label>
                <input
                  type="checkbox"
                  onChange={(e) => this.handleCheckboxChange(e, 'audio')}
                  checked={this.state.audio}
                />
              </div>
              <div className="home-search__form-checkboxes__checkbox">
                <label htmlFor="nasa-images">Video</label>
                <input
                  type="checkbox"
                  onChange={(e) => this.handleCheckboxChange(e, 'video')}
                  checked={this.state.video}
                />
              </div>
          </div>
        </form>
      </section>
    )
  }

}

export default HomeSearch;