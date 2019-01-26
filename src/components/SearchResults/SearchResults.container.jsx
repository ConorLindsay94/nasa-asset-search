import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import searchQuery from '../../actions/search-query';

const mapStateToProps = (state) => ({
  queryString: state.search.queryString,
  mediaTypes: state.search.mediaTypes,
  results: state.results.results,
});

const mapDispatchToProps = (dispatch) => ({
  searchQuery: (query) => dispatch(searchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
