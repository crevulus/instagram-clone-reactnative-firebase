import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

import firebase from "firebase";
import "firebase/firestore"; // needed to do this extra import to get set method in onSignUp to work

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      name: "",
    };
  }

  onSignUp = () => {
    const { email, pw, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw)
      .then((res) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="Enter your email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={(pw) => this.setState({ pw })}
        />
        <Button title="Submit" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}
