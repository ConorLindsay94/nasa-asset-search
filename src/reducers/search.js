import createMediaArray from '../util/create-media-array';

export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_QUERY_STRING':
      return Object.assign({}, state, {
        queryString: action.payload,
      });
    case 'SET_MEDIA_TYPES':
      const mediaTypes = createMediaArray(action.payload);

      return Object.assign({}, state, {
        mediaTypes,
      });
    default:
      return state;
  }
}
