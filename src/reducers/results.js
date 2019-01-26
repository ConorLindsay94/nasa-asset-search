export default function results(state = {}, action) {
  switch (action.type) {
    case 'SET_RESULTS':
      return Object.assign({}, state, {
        results: action.payload ?
          action.payload.collection :
          action.payload,
      });
    default:
      return state;
  }
}
