export default (action, state) => {
  switch (action.type) {
    case "SET-TOKEN":
      return {
        ...state,
        token: action.payload.token,
        // email: action.payload.data.email,
        // fullName: action.payload.data.name,
      };

    case "CLEAR-STATES":
      return {
        ...state,
        token: '',
        
      };
    default: {
      return state;
    }
  }
};
