import React, { Component } from "react";
import { View, FlatList } from "react-native";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={this.props.todos}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => {
            return (
              <Todo
                text={item.text}
                completed={item.completed}
                onClick={() => {
                  this.props.onTodoClick(index);
                  // console.log(index);
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}

export default TodoList;
