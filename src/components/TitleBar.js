import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class TitleBar extends Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.title}>Todo App</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#2196f3",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row"
  },
  title: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});
