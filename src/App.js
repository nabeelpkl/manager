import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./Router";
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDIJUrSO4I4I5Dyn7-08x8eSzdkg6GejYg",
      authDomain: "manager-b51ef.firebaseapp.com",
      databaseURL: "https://manager-b51ef.firebaseio.com",
      projectId: "manager-b51ef",
      storageBucket: "manager-b51ef.appspot.com",
      messagingSenderId: "1098608577170"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
