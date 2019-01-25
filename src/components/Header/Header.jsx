import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <svg>
            <title>NasaSearch Logo</title>
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </div>
      </header>
    )
  }

}

export default Header;