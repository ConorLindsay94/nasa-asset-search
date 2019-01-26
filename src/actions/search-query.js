import getHandler from '../util/get-handler';

export default function searchQuery(query) {
  return dispatch => getHandler('search', query)
    .then(res => dispatch({ type: 'SET_RESULTS', payload: res.data }));
}
