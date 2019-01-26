import { connect } from 'react-redux';
import HomeSearch from './HomeSearch';
import setQueryString from '../../actions/set-query-string';
import setMediaTypes from '../../actions/set-media-types';

const mapDispatchToProps = (dispatch) => ({
  setQueryString: (query) => dispatch(setQueryString(query)),
  setMediaTypes: (query) => dispatch(setMediaTypes(query)),
});

export default connect(null, mapDispatchToProps)(HomeSearch);
