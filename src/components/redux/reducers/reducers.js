const initialState = {
    branches: [],
    departments: [],
    events: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BRANCHES':
        return { ...state, branches: action.branches };
      case 'SET_DEPARTMENTS':
        return { ...state, departments: action.departments };
      case 'SET_EVENTS':
        return { ...state, events: action.events };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  