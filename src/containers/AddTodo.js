import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ backgroundColor: "#FFFFF", height: 100 }}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          placeholder="Add a new todo..."
          value={this.state.text}
          style={{
            height: 40,
            borderWidth: 1,
            paddingHorizontal: 10,
            fontSize: 18
          }}
        />
        <Button
          title="Add"
          onPress={() => {
            this.props.dispatch(addTodo(this.state.text));
            this.setState({ text: null });
          }}
        />
      </View>
    );
  }
}

export default connect()(AddTodo);
