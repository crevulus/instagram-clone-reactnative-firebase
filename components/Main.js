import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { connect } from "react-redux";
import { bindActionCreators, bindActionsCreators } from "redux";

import { fetchUser } from "../redux/actions/index";

import Feed from "./main/Feed";
import Profile from "./main/Profile";
import Test from "./main/Test";

const Empty = () => null;

const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Tab.Navigator initialRouteName="Feed" labeled={false}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Add New"
          component={Empty}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Add");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="add" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Test"
          component={Test}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="science" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
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
