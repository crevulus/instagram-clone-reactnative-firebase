import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators, bindActionsCreators } from "redux";

import { fetchUser } from "../redux/actions/index";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text>User is logged in!!</Text>
        <Text>Welcome, {currentUser.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapActionsToProps = (action) =>
  bindActionCreators(
    {
      fetchUser,
    },
    action
  );

export default connect(mapStateToProps, mapActionsToProps)(Main);
