import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.queryString !== prevProps.queryString) {
      this.setState({
        searchText: this.props.queryString,
      });
    }
  }

  handleInputChange(e) {
    this.setState({
      searchText: e.target.value.length ?
        e.target.value : null,
    });
  }

  handleSubmit(e) {
    const media = this.props.mediaTypes.map(type => type.type);

    e.preventDefault();

    this.props.setQueryString(this.state.searchText);
    this.props.searchQuery({ q: this.state.searchText, 'media_type': media });
  }

  render() {
    return (
      <header className={`header ${this.props.queryString ? 'header--active' : ''}`}>
        <div className="header__logo">
          <svg>
            <title>NasaSearch Logo</title>
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </div>
        {
          this.props.queryString ?
            <form 
              onSubmit={this.handleSubmit}
              className="header__mini-search">
              <div className="header__mini-search__input"
            >
                <SearchBar 
                  handleInputChange={this.handleInputChange}
                  searchText={this.state.searchText}
                />            
              </div>
            </form> : null
        }
      </header>
    )
  }

}

export default Header;