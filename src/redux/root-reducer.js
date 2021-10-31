import { combineReducers } from 'redux';

import sidebarReducer from './sidebar/sidebar.reducer';

export default combineReducers({
  sidebar: sidebarReducer
});
