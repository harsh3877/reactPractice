import React from "react";
import "./App.css";

import MainComponent from "./components/MainComponent";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
