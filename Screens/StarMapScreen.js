import React, { Component } from 'react';
import { Text, View ,SafeAreaView,StyleSheet,TextInput} from 'react-native';
import {WebView} from 'react-native-webview'
import CheckBox from 'expo-checkbox';

export default class StarMapScreen extends Component {
    constructor(){
        super();
        this.state={
            longitude: 77.102493,
            latitude: 28.704060,
            constellations: true,
            gridLines: true
        }
    }


    render() {
        
        return (
            <View style={{flex:1}}>
                <Text style={{fontSize:30}}>Star Map Screen</Text>
                <TextInput  style={{marginLeft:10,marginTop:10}} placeholder='Enter Longitude...' onChangeText={(text)=>{
                    this.setState({longitude: text})
                }}></TextInput>
                <TextInput style={{marginLeft:10,marginTop:10}} placeholder='Enter Latitude...' onChangeText={(text)=>{
                    this.setState({latitude: text})
                }}></TextInput>
                <View style={{flexDirection: 'row',width:'50%',}}>
                <CheckBox style={{marginLeft:10,marginTop:10}}value={this.state.constellations} onValueChange={(value)=>{this.setState({constellations: value})}}/>
                <Text style={{marginLeft:10,marginTop:10}}>Show Constellations</Text>
                </View>
                <View style={{flexDirection: 'row',width:'50%',}}>
                    <CheckBox style={{marginLeft:10,marginTop:10}} value={this.state.gridLines} onValueChange={(value)=>{this.setState({gridLines: value})}}/>
                    <Text style={{marginLeft: 10,marginTop:10}}>Show GridLines</Text>
                </View>
                                
                <WebView 
                    style={styles.mapView}
                    source={{uri: 'https://virtualsky.lco.global/embed/index.html?longitude='+ this.state.longitude + '&latitude=' + this.state.latitude + '&constellations='+this.state.constellations+'&constellationlabels=true&showstarlabels=true&gridlines_az='+this.state.gridLines+'&live=true'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapView:{
        marginTop: 50,
        width:'100%'
    }
})
