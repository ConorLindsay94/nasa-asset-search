import React, { Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';

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

  checkboxSelected() {
    if (!this.state.images &&
        !this.state.audio &&
        !this.state.video) {
          return false;
      } else {
        return true;
      }
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
              className={this.state.searchText && this.checkboxSelected() ? 
                "home-search__form-submit home-search__form-submit--active" :
                "home-search__form-submit"
              }
              disabled={this.state.searchText && this.checkboxSelected() ?
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
                <Checkbox
                  id="nasa-images"
                  label="Images"
                  handleCheckboxChange={this.handleCheckboxChange}
                  type={this.state.images}
                  typeText="images"
                />
              </div>
              <div className="home-search__form-checkboxes__checkbox">
                <Checkbox
                  id="nasa-audio"
                  label="Audio"
                  handleCheckboxChange={this.handleCheckboxChange}
                  type={this.state.audio}
                  typeText="audio"
                />
              </div>
              <div className="home-search__form-checkboxes__checkbox">
                <Checkbox
                  id="nasa-video"
                  label="Video"
                  handleCheckboxChange={this.handleCheckboxChange}
                  type={this.state.video}
                  typeText="video"
                />
              </div>
          </div>
          <div className="home-search__form-message">
            <p className={`error ${!this.checkboxSelected() ? 'error--display' : ''}`}>You must choose at least one type of asset.</p>
          </div>
        </form>
      </section>
    )
  }

}

export default HomeSearch;