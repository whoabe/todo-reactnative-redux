import React, { Component } from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import { View } from "react-native";

class Footer extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#2196f3",
          height: 60,
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-around"
        }}
      >
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <FilterLink filter="SHOW_COMPLETED">Complete</FilterLink>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      </View>
    );
  }
}

export default Footer;
