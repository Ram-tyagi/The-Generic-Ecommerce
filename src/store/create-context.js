import React from "react";
const CreateContext = React.createContext({
  email: "",
  // onLogginEmail: (email) => {},
  item: [],
  addItems: (item) => {},
  removeItems: () => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export default CreateContext;
