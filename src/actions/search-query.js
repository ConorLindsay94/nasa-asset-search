import getHandler from '../util/get-handler';
import setResults from './set-results';

export default function searchQuery(query) {
  return dispatch => getHandler('search', query)
    .then(res => dispatch(setResults(res.data)));
}
