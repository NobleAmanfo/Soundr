import React from "react";
import { StyleSheet, Text, View, StatusBar, Pressable, BackHandler, Image, ScrollView, FlatList } from "react-native";
import moment from "moment";

const Recents = (props) => {
    return(
        <ScrollView>
          <View style = {{flexDirection:'row'}}>
          <View>
          <Pressable style={styles.button1}
          onPress={() => this.props.navigation.navigate('Home')
          } >
            <View  style={{ flexDirection: 'row', paddingTop:10, alignItems: 'center', paddingLeft:8}}>
              <View style = {{borderWidth: 2, borderRadius:20, borderColor: '#94a274', marginRight:50}}>
              <Image
                style={{ height: 15, width: 15, }}
                source={require('../assets/add-2.png')
                }
              />
              </View>
            
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274'}} >New</Text>
            </View>
            <View style = {{position :"absolute", bottom:0, paddingBottom:10 }}>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >{props.text}</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >{moment().startOf('hour').fromNow()}</Text>
            </View>
        </Pressable>
        </View>
        </View>
        </ScrollView>
    )
}

export default Recents;

const styles = StyleSheet.create({
    container1: {
      backgroundColor: '#94a274',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60%',
      height: '70%',
      borderRadius: 20
    },
    container2: {
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
      height: '40%',
      borderRadius: 30
    },
    box: {
      height: 200,
      width: 200,
      backgroundColor: '#94a274',
      borderRadius: 50
    },
    button: {
      borderWidth: 2,
      borderColor: '#94a274',
      alignItems: 'center',
      justifyContent: 'center',
      // height: '25%',
      // width: '30%',
      height: 65,
      width:120,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'white',
      marginLeft:13,
      marginTop:10
      
    },
    button2: {
      borderWidth: 2,
      borderColor: '#94a274',
      alignItems: 'center',
      justifyContent: 'center',
      // height: '25%',
      // width: '30%',
  
      height: 150,
      width:120,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'white',
      marginLeft:25,
      marginTop:10
      
    },
  
    button1: {
      borderWidth: 2,
      borderColor: '#94a274',
      // height: '25%',
      // width: '30%',
      height: 150,
      width:120,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'white',
      marginLeft:13,
      marginTop:10,
      
    },
    wrapper: {
      flex: 1
  },
  container: {
      flexDirection: 'row',
      paddingHorizontal: 5,
  },
  list: {
      flex: 1,
      flexDirection: 'column',
      paddingVertical: 10,
      paddingHorizontal: 5,
      
  }
  
  })