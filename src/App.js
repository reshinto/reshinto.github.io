import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import store from "./redux/store";
import Header from "./components/headers/header";

function App() {
  window.location.href = "https://sg.linkedin.com/in/terence-kong";
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
