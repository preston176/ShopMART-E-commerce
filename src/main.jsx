import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { IntlProvider } from "react-intl";
import "./index.css";
import reducer, { initialState } from "./reducer.js";
import { StateProvider } from "./StateProvider";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const locale = "en";
const messages = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <IntlProvider locale={locale} messages={messages}>
        <App />
      </IntlProvider>
    </StateProvider>
  </React.StrictMode>,
);
