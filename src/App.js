import React from "react";
import "./index.css";
import { Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
