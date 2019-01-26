export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_QUERY_STRING':
      return Object.assign({}, state, {
        queryString: action.payload,
      });
    case 'SET_MEDIA_TYPES':
      return Object.assign({}, state, {
        mediaTypes: action.payload,
      });
    default:
      return state;
  }
}
