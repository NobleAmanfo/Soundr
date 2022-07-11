import React, {Component} from 'react';import { StyleSheet, Text, View, StatusBar, Pressable, } from "react-native";
import { Button } from "react-native-web";



export default class LandingPage extends React.Component{
  render(){
    return (
      <View style={{backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center', flex:1}}>
            <StatusBar style="auto" />
    
            <View style={styles.container2}>
            <View style={styles.container1}></View>
            </View>
             <Pressable style={styles.button} 
             onPress={() => this.props.navigation.navigate('SignUp')
            } >
            <Text style = {{color:'white', fontWeight: "bold"}} >Get Started</Text>
          </Pressable>
          </View>
    )
  }
}

const styles = StyleSheet.create({
    container1: {
      backgroundColor: '#94a274',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60%',
      height:'70%',
      borderRadius: 20
    },
      container2: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height:'40%',
    borderRadius: 30
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: '#94a274',
    borderRadius: 50
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 160,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginTop :50
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 115,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: 'white',
    marginTop :8,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  modalBackground: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "center",
    alignContent: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius:20,
    elevation: 20
  }
  
  
  })