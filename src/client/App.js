import React from "react";
import { Provider } from "react-redux";
/**
 * Redux Store
 */
import store from "./store";
/**
 * Main CSS Styles
 */
import "./styles/main.css";
import Main from "./containers/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
