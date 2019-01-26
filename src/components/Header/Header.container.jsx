import { connect } from 'react-redux';
import Header from './Header';
import setQueryString from '../../actions/set-query-string';
import searchQuery from '../../actions/search-query';

const mapStateToProps = (state) => ({
  queryString: state.search.queryString,
  mediaTypes: state.search.mediaTypes,
});

const mapDispatchToProps = (dispatch) => ({
  setQueryString: (query) => dispatch(setQueryString(query)),
  searchQuery: (query) => dispatch(searchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
