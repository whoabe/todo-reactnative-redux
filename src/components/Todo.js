import React, { Component } from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

export default class Todo extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <TouchableHighlight
          underlayColor="white"
          onPress={() => {
            this.props.onClick();
          }}
        >
          <Text
            style={
              this.props.completed
                ? [styles.item, styles.completed]
                : styles.item
            }
          >
            {this.props.text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  completed: {
    textDecorationLine: "line-through"
  }
});
