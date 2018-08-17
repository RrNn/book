import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Index from "./components/Index";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
