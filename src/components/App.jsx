import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import HomeSearch from './HomeSearch/HomeSearch';

class App extends Component {

  render() {
    return (
      <main className="nasa-app">
        <Header />
        <Router>
          <Route path="/" component={HomeSearch} />
        </Router>
      </main>
    )
  }

}

export default App;