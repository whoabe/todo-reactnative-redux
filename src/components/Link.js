import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

class Link extends Component {
  render() {
    return (
      <Button
        color={this.props.active == true ? "#ff3d00" : "#90A4AE"}
        title={this.props.children}
        // children is taken from the Footer text
        onPress={this.props.onClick}
      />
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
