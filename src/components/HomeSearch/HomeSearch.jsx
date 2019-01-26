import React, { Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import SearchBar from '../SearchBar/SearchBar';

class HomeSearch extends Component {

  constructor() {
    super();

    this.state = {
      mediaTypes: [
        { type: 'image', value: true, prettyName: 'Images'},
        { type: 'audio', value: false, prettyName: 'Audio'},
        { type: 'video', value: false, prettyName: 'Videos'},
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkboxSelected = this.checkboxSelected.bind(this);
  }

  componentDidMount() {
    this.props.setQueryString(null);
    this.props.setResults(null);
    this.props.setMediaTypes([...this.state.mediaTypes]);
  }

  handleInputChange(e) {
    this.setState({
      searchText: e.target.value.length ?
        e.target.value : null,
    });
  }

  handleCheckboxChange(e, typeName) {
    let mediaTypes = this.state.mediaTypes;
    let mediaType = mediaTypes.find(type => type.type === typeName);
    const typeIdx = mediaTypes.findIndex(type => type.type === typeName);

    mediaType.value = e.target.checked;

    mediaTypes.splice(typeIdx, 1, mediaType);

    this.setState({
      mediaTypes,
    }, () => {
      this.props.setMediaTypes([...mediaTypes]);
    });
  }

  handleSubmit(e) {
    const selectedMediaTypes = this.state.mediaTypes.filter(type => type.value);
    e.preventDefault();

    this.props.history.push({
      pathname: '/search',
      search: `?query=${this.state.searchText}&media=${selectedMediaTypes.map(type => type.type)}`,
      state: {
        query: this.state.searchText,
        media: selectedMediaTypes.map(type => type.type),
      }
    });
  }

  checkboxSelected() {
    const checkedMedia = this.state.mediaTypes
      .find(type => type.value);

    if (checkedMedia) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <section className="home-search">
        <form
          className="home-search__form"
          onSubmit={this.handleSubmit}
        >
          <label 
            htmlFor="nasa-home-search"
            className="home-search__form-label">
              What would you like to search for?
          </label>
          <SearchBar 
            handleInputChange={this.handleInputChange}
            searchText={this.state.searchText}
          />
          <div className="home-search__form-checkboxes">  
            {this.state.mediaTypes.map(type => (
              <div
                className="home-search__form-checkboxes__checkbox"
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
            ))}
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