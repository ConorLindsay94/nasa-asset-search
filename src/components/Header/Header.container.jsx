import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
import setQueryString from '../../actions/set-query-string';
import searchQuery from '../../actions/search-query';
import setResults from '../../actions/set-results';

const mapStateToProps = (state) => ({
  queryString: state.search.queryString,
  mediaTypes: state.search.mediaTypes,
});

const mapDispatchToProps = (dispatch) => ({
  setQueryString: (query) => dispatch(setQueryString(query)),
  searchQuery: (query) => dispatch(searchQuery(query)),
  setResults: (results) => dispatch(setResults(results)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
