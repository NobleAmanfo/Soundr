import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";


export default class Home extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fafafa', alignItems: 'center', flex: 1 }}>
                {/* <StatusBar style="auto" /> */}

                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 0, backgroundColor: 'black', width: '100%', height: 90, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                    <View style={{ marginLeft: 20 }}>
                        <Pressable style={{ elevation: 30, borderRadius: 8, backgroundColor: '#94a274', height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => this.props.navigation.navigate('Home')
                            } >

                            <Image
                                style={{ height: 15, width: 15, }}
                                source={require('../assets/play-button.png')
                                }
                            />
                        </Pressable>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Pressable style={{ elevation: 30, borderRadius: 8, backgroundColor: '#94a274', height: 32, width: 32, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => this.props.navigation.navigate('Home')
                            } >

                            <Image
                                style={{ height: 15, width: 15, }}
                                source={require('../assets/pause.png')
                                }
                            />
                        </Pressable>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Pressable style={{ elevation: 30, borderRadius: 8, backgroundColor: '#94a274', height: 32, width: 32, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => this.props.navigation.navigate('Home')
                            } >

                            <Image
                                style={{ height: 15, width: 15, }}
                                source={require('../assets/rewind-button.png')
                                }
                            />
                        </Pressable>
                    </View>
                    <View style={{ position: 'absolute', right: 0, marginRight: 20 }}>
                        <Pressable style={{ elevation: 30, borderRadius: 8, backgroundColor: '#94a274', height: 40, width: 70, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => this.props.navigation.navigate('Home')
                            } >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: "bold", color: 'black' }} >Save</Text>
                                <View style = {{paddingHorizontal:2}}>
                                    <Image
                                        style={{ height: 15, width: 15, }}
                                        source={require('../assets/download.png')
                                        }
                                    />
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }
}