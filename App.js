import React from "react";
import { StyleSheet, Text, View, StatusBar, Pressable, } from "react-native";

import { createStackNavigator} from "react-navigation-stack"
import { createAppContainer} from 'react-navigation'
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import NewRecents from "./components/NewRecents";
import Home from "./components/Home";



const RootStack  = createStackNavigator({
  LandingPage: {
    screen: LandingPage, 
    navigationOptions: {
      header: null,
  }},
  SignUp: {
    screen: SignUp,
    navigationOptions:{
      header:null,
    }},
      NewRecents: {
        screen: NewRecents,
        navigationOptions:{
          header:null,
        }},
        Home: {
          screen: Home,
          navigationOptions:{
            header:null,
          }},


})

export default createAppContainer(RootStack);
