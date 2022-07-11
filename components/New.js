import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Pressable, TextInput, Image, ScrollView, FlatList } from "react-native";
import Recents from "../components/Recents";
import NewPopup from "../components/NewPopup";
import Modal from 'react-native-modal';




export default class New extends React.Component {
  constructor(){
    super();
    this.state = {
      show:false
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
        <StatusBar style="auto" />
        <View style={{ backgroundColor: 'black', alignItems: 'center', height: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }}>

          <View style={{ height: 80, width: 60, backgroundColor: '#94a274', borderRadius: 10, marginTop: 50, }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ borderRadius: 30, backgroundColor: 'black', height: 40, width: 40, marginTop: 10 }}>
                <Text style={{ color: 'black', fontWeight: "bold", fontSize: 10, paddingVertical: 45, marginLeft: 5 }} >Noble</Text>

              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ color: 'black', fontWeight: "bold", marginLeft: 20, fontSize: 25, }} >Projects</Text>
          <Pressable style={styles.button}
            onPress={() => {this.setState({show:true})}} >
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ borderWidth: 2, borderRadius: 4, borderColor: '#94a274', marginRight: 10 }}>
                <Image
                  style={{ height: 15, width: 15, }}
                  source={require('../assets/add-2.png')
                  }
                />
              </View>

              <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274' }} >New</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Text style={{ color: 'black', fontWeight: "bold", marginLeft: 20, fontSize: 25, paddingTop: 20 }} >Recents</Text>
        </View>


        <Modal transparent = {true} visible = {this.state.show}>
          <View style={{blurRadius:2, backgroundColor: '#000000aa', borderRadius:10,  height:500, justifyContent:'center', alignItems:'center', }}>
            <View style = {{paddingBottom:10}}>
              <Text style = {{fontSize:30, fontWeight:'bold'}}>
                Title
              </Text>
            </View>
            <View style = {{elevation: 20, backgroundColor:'#ffffff', padding:10, justifyContent:'center', alignItems:'center', borderRadius:10, borderWidth:1, borderColor: '#94a274',}}>
            <TextInput
          style={styles.input}
          placeholder="Project Name"
        />
              </View>
              <Pressable style={styles.button1}
          onPress={() => {this.setState({show:false}, () => this.props.navigation.navigate('Home'))} 
          } >
            <View style = {{borderWidth:2, borderColor:'white', backgroundColor: 'transparent', borderRadius:10}}>
            <Text style={{ color: 'white', fontWeight: "bold", padding:10, paddingHorizontal:18 }} >Ready when you are!</Text>
            </View>
        </Pressable>

          </View>
      </Modal >

      <Recents text={'LoverBoy'} />
 
    {/* <ScrollView>
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
      
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject1</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject2</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        </View>
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject3</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
      
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject4</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject5</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        </View>
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject6</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
      
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject7</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject8</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        </View>
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject9</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
      
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject10</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        <View >
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
            <View>
            <Text style={{ color: 'black', fontWeight: "bold", color: '#94a274', paddingLeft:8, paddingTop:30}} >NexusProject11</Text>
            <Text style={{ color: 'black', fontSize:10, color: '#94a274', paddingLeft:8, paddingTop:5}} >Jun 22, 2022</Text>
            </View>
        </Pressable>
        </View>
        </View>
        </ScrollView> */}


    {/* <Pressable style={styles.button} 
               onPress={() => this.props.navigation.navigate('Home')
              } >
            </Pressable> */}
      </View >
    )
  }
}

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
    height: 65,
    width: 120,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    marginLeft: 13,
    marginTop: 10

  },

  button1: {
    height: 50,
    width: 200,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#94a274',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
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

  },
  input: {
   
    paddingVertical: 12,
    width: 300,
    borderWidth: 1,
    backgroundColor: '#94a274',
    padding: 10,
    borderRadius: 10
  },

})