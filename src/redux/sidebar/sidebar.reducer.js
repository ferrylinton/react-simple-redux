const INITIAL_STATE = {
  isSidebarShow: false
};

const sidebarReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isSidebarShow: !state.isSidebarShow
      };
    default:
      return state;
  }
  
};

export default sidebarReducer;
