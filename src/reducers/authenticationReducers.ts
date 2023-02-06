interface Action {
  type: string;
  payload: any;
}

const initialState = {
  email: "",
  password: "",
};

export const authenticationReducers = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case "GET_EMAIL_ADDRESS":
      return { ...state, data: action.payload };
    case "GET_PASSWORD":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
