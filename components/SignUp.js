import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";



export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container1}>
        <Text style={{ marginTop: 90, fontWeight: "bold", fontSize: 20 }}>Create an account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        <Pressable style={styles.button}
          onPress={() => this.props.navigation.navigate('New')
          } >
          <Text style={{ color: 'white', fontWeight: "bold" }} >Create an Account</Text>
        </Pressable>

        <Pressable style={styles.button1}
          onPress={() => this.props.navigation.navigate('Home')
          } >
          <Text style={{ color: 'grey', fontWeight: "bold" }} >Already have an account?</Text>
        </Pressable>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>

          <View style={{ marginLeft: 15, flex: 1, height: 1, backgroundColor: 'grey' }} />
          <View>
            <Text style={{ width: 40, textAlign: 'center' }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'grey', marginRight: 15, }} />
        </View>

        <View style={{ marginTop: 30 }}>
          <Pressable style={styles.button3}
            onPress={() => this.props.navigation.navigate('Home')
            } >
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Image
                style={styles.tinyLogo}
                source={require('../assets/google.png')
                }
              />
              <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }} >Continue with Google</Text>
            </View>
          </Pressable>

          <Pressable style={styles.button3}
            onPress={() => this.props.navigation.navigate('Home')
            } >
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Image
                style={{
                  height: 18,
                  width: 18,
                  marginRight: 5,
                  marginLeft: 20
                }}
                source={require('../assets/facebook2.png')
                }
              />
              <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }} >Continue with Facebook</Text>
            </View>
          </Pressable>
          <Pressable style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 5,
            width: 380,
            borderRadius: 10,
            elevation: 15,
            backgroundColor: 'white',
            marginTop: 20,
            // borderColor: 'black',
            borderWidth: 1,
          }}
            onPress={() => this.props.navigation.navigate('NewRecents')
            } >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }} >
              <Image
                style={{ height: 28, width: 28, }}
                source={require('../assets/apple.png')
                }
              />
              <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }} >Continue with Apple</Text>
            </View>
          </Pressable>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    flex: 1,
    borderRadius: 20
  },
  input: {
    marginTop: 20,
    paddingVertical: 12,
    width: 300,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 380,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#94a274',
    marginTop: 50
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 380,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: 'white',
    marginTop: 8,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 380,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: 'white',
    marginTop: 20,
    // borderColor: 'black',
    borderWidth: 1,
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 380,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: 'white',
    marginTop: 20,
    // borderColor: 'black',
    borderWidth: 1,
  },

  tinyLogo: {
    height: 18,
    width: 18,
    marginRight: 5
  }


})
