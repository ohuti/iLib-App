import React from "react";
import "./src/configs/reactotronConfig.js";
import store from "./src/store";
import { Provider } from "react-redux";

import Routes from "./src/routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
