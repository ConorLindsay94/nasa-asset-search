import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import searchQuery from '../../actions/search-query';
import setQueryString from '../../actions/set-query-string';
import setMediaTypes from '../../actions/set-media-types';
import setActiveItem from '../../actions/set-active-item';

const mapStateToProps = (state) => ({
  queryString: state.search.queryString,
  mediaTypes: state.search.mediaTypes,
  results: state.results.results,
});

const mapDispatchToProps = (dispatch) => ({
  searchQuery: (query) => dispatch(searchQuery(query)),
  setQueryString: (query) => dispatch(setQueryString(query)),
  setMediaTypes: (query) => dispatch(setMediaTypes(query)),
  setActiveItem: (query) => dispatch(setActiveItem(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
