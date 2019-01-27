export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return Object.assign({}, state, {
        activeItem: action.payload,
      });
    default:
      return state;
  }
}
