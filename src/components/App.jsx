import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Header.container';
import HomeSearch from './HomeSearch/HomeSearch.container';
import SearchResults from './SearchResults/SearchResults.container';
import ViewAsset from './ViewAsset/ViewAsset';

class App extends Component {

  render() {
    return (
      <main className="nasa-app">
        <Router>
          <Fragment>
          <Header />
            <Switch>
              <Route path="/home" component={HomeSearch} />
              <Route path="/search" component={SearchResults} />
              <Route path="/asset/:type/:id" component={ViewAsset} />
              <Redirect to="/home" />
            </Switch>
          </Fragment>
        </Router>  
      </main>
    )
  }

}

export default App;