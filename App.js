import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TitleBar from "./src/components/TitleBar";
import rootReducer from "./src/reducers";
import AddTodo from "./src/containers/AddTodo";
import Footer from "./src/components/Footer";
import VisibleTodoList from "./src/containers/VisibleTodoList";

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TitleBar />
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
