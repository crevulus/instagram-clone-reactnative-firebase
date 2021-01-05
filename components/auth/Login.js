import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
    };
  }

  onSignIn = () => {
    const { email, pw } = this.state;
    firebase
      .auth()
      .signInUserWithEmailAndPassword(email, pw)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={(pw) => this.setState({ pw })}
        />
        <Button title="Submit" onPress={() => this.onSignIn()} />
      </View>
    );
  }
}
