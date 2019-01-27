import { combineReducers } from 'redux';
import results from './results';
import search from './search';
import item from './item';

export default combineReducers({
  results,
  search,
  item,
});
