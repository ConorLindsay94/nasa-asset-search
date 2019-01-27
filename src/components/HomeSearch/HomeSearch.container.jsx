import { connect } from 'react-redux';
import HomeSearch from './HomeSearch';
import setQueryString from '../../actions/set-query-string';
import setMediaTypes from '../../actions/set-media-types';
import setResults from '../../actions/set-results';

const mapStateToProps = (state) => ({
  mediaTypes: state.search.mediaTypes,
});

const mapDispatchToProps = (dispatch) => ({
  setQueryString: (query) => dispatch(setQueryString(query)),
  setMediaTypes: (query) => dispatch(setMediaTypes(query)),
  setResults: (results) => dispatch(setResults(results)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);
