const INITIAL_STATE = {
  logged: false,
  nome: "",
  id: "",
  email: "",
  token: "",
  tipo: "",
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `LOGGED`:
      return { ...action, logged: true };
    case `SIGNOUT`:
      return { ...state, logged: false };
    default:
      return state;
  }
}
