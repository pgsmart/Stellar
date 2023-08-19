import React, { Component, useState, useEffect} from 'react';
import { Text, View ,Alert,Image,StyleSheet,ImageBackground} from 'react-native';
import axios from 'axios'
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Font from 'expo-font'

export default class DailyPicScreen extends Component {

    

    constructor(){
        super();
        this.state = {
            storage: [],
            date: new Date(),
            textDate: '',
            picked: false,
            fontsLoaded:false
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
    

    componentDidMount(){
        this.loadFonts();
        this.getData()
        
    }

    

    getData=()=>{

        axios.get('https://api.nasa.gov/planetary/apod?api_key=xoqmGXqHRE7a1N4kYZRv2LcF0DLTmwwm2qfdH9dz&date=' + this.state.textDate)
        .then((response)=>{
          
            this.setState({
                storage: response.data,
            })
        })
        
    }

    updateDate(date){
        var timeStamp = date.nativeEvent.timestamp
        var newDate = new Date(timeStamp)
        var month = newDate.getMonth() + 1
        if(newDate.getDate() < 10){
            var date2 = '0' + newDate.getDate()
        }else {
            var date2 = newDate.getDate()
        }
        var txtDate;
        if(month < 10){
            txtDate = newDate.getFullYear()+'-0'+month+'-'+date2
        }else {
            txtDate = newDate.getFullYear()+'-'+month+'-'+date2
        }
        console.log(txtDate)
        
        this.setState({
            date: newDate,
            textDate: txtDate,
            
        })

        this.getData()

        this.setState({
            picked: true
        })
        
    }

    render() {

        if(this.state.picked === false){
            return (
            

                <View>
                    <ImageBackground source={require('../assets/space.jpeg')}>
                    <DateTimePicker mode='default' display='default' value={this.state.date} onChange={(date)=>{this.updateDate(date)}}/>
                    
                    </ImageBackground>
                    
                
                </View>
            )
        }else {
            if(this.state.fontsLoaded){
            return (
            

                <View>
                    <ImageBackground style={{}} source={require('../assets/space.jpeg')}>
                    <Text style={styles.date}>{this.state.textDate}</Text>
                    <Text style={styles.title}>{this.state.storage.title}</Text>
                    <Text style={styles.explanation}>{this.state.storage.explanation}</Text>
                    <Image style={{alignSelf:'center',width:'90%', resizeMode:'contain',height:'40%'}} source={{uri: this.state.storage.hdurl}}></Image>
                     </ImageBackground>
                
                </View>
            )
            }
        }

        

            
        
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        paddingLeft:20,
        marginTop:20,
        fontFamily:'Bungee-Spice',
        color:'white'
    },
    date:{
        alignSelf: 'center',
        fontSize:30,
        fontWeight: 300,
        fontFamily: 'Bricolage',
        color:'white'
    },
    explanation:{
        padding: 20,
        fontFamily: 'Roboto-Con',
        color:'white'
    }
})
