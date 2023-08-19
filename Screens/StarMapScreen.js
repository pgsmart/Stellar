import React, { Component } from 'react';
import { Text, View ,SafeAreaView,StyleSheet,TextInput,ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview'
import CheckBox from 'expo-checkbox';
import * as Font from 'expo-font'

export default class StarMapScreen extends Component {
    constructor(){
        super();
        this.state={
            longitude: 77.102493,
            latitude: 28.704060,
            constellations: true,
            gridLines: true,
            fontsLoaded: false
        }
    }

        
    async loadFonts() {
        await Font.loadAsync({
          'Bungee-Spice': require('../assets/fonts/BungeeSpice-Regular.ttf'),
          'Future-Now': require('../assets/fonts/FutureNowRegular-25Bl.ttf'),
          'Bricolage': require('../assets/fonts/BricolageGrotesque.ttf'),
          'Roboto-Con': require('../assets/fonts/RobotoCondensed.ttf')
        });
        this.setState({ fontsLoaded: true });
      }

      componentDidMount() {
        this.loadFonts();
      }


    render() {
        if(this.state.fontsLoaded){
        return (
            <View style={{flex:1}}>
                <ImageBackground style={{flex:1}} source={require('../assets/space.jpeg')}>
                <Text style={{fontSize:50,fontFamily:'Future-Now',margin:10,color:'white'}}>Star Map Screen</Text>
                <TextInput  style={{marginLeft:10,marginTop:10,fontFamily:'Roboto-Con',fontSize:20,color:'white',}} placeholderTextColor={'white'} placeholder='Enter Longitude...' onChangeText={(text)=>{
                    this.setState({longitude: text})
                }}></TextInput>
                <TextInput style={{marginLeft:10,marginTop:10,fontFamily:'Roboto-Con',fontSize:20,marginBottom:20,color:'white',}} placeholderTextColor={'white'} placeholder='Enter Latitude...' onChangeText={(text)=>{
                    this.setState({latitude: text})
                }}></TextInput>
                <View style={{flexDirection: 'row',width:'50%',}}>
                <CheckBox style={{marginLeft:10,marginTop:10}}value={this.state.constellations} onValueChange={(value)=>{this.setState({constellations: value})}}/>
                <Text style={{marginLeft:10,marginTop:3,fontFamily:'Bricolage',fontSize:25,color:'white'}}>Show Constellations</Text>
                </View>
                <View style={{flexDirection: 'row',width:'50%',}}>
                    <CheckBox style={{marginLeft:10,marginTop:10}} value={this.state.gridLines} onValueChange={(value)=>{this.setState({gridLines: value})}}/>
                    <Text style={{marginLeft: 10,marginTop:3,fontFamily:'Bricolage',fontSize:25,color:'white'}}>Show GridLines</Text>
                </View>
                                
                <WebView 
                    style={styles.mapView}
                    source={{uri: 'https://virtualsky.lco.global/embed/index.html?longitude='+ this.state.longitude + '&latitude=' + this.state.latitude + '&constellations='+this.state.constellations+'&constellationlabels=true&showstarlabels=true&gridlines_az='+this.state.gridLines+'&live=true'}}
                />
                </ImageBackground>
            </View>
        )
            }
    }
}

const styles = StyleSheet.create({
    mapView:{
        marginTop: 50,
        width:'100%',
        marginBottom:20
    }
})
