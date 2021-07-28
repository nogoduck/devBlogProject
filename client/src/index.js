import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

import fs from "fs";
const path = `../.env`;
const variable = `
 ENV_VAR_1=${process.env.ENV_VAR_1_NETLIFY}\n
 ENV_VAR_2=${process.env.ENV_VAR_2_NETLIFY}\n
 ENV_VAR_3=${process.env.ENV_VAR_3_NETLIFY}
`;
fs.writeFileSync(path, variable);

console.log("ENV_VAR1 >> ", variable.ENV_VAR_1);
console.log("ENV_VAR2 >> ", variable.ENV_VAR_2);
console.log("ENV_VAR3 >> ", variable.ENV_VAR_3);

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
