import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Landing;
