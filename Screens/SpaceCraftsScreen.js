import React,{Component} from 'react';
import { Text, View ,StyleSheet,Alert,FlatList,Image, ImageBackground} from 'react-native';
import axios from 'axios'
import { Avatar, Button, Card } from 'react-native-paper';
import * as Font from 'expo-font';

export default class SpaceCraftsScreen extends Component {
    constructor(){
        super();
        this.state = {
            aircrafts: '',
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

    componentDidMount(){
        this.getData()
        this.loadFonts();
    }

    getData = () =>{
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/?format=json')
        .then(response => {
            this.setState({
                aircrafts: response.data.results
            })
            console.log(this.state.aircrafts)
        })
    }

    renderItem=({item})=>{
        return(
 
            <View style={{width: 415,flex:1, alignItems:'center',justifyContent:'center'}}>
                <Card style={{width:'90%',marginBottom:0}}>
                <Text style={{margin:20,fontSize:30,fontFamily:'Bricolage'}}>{item.name}</Text>
                <Card.Cover style={{width:'95%',alignSelf:'center'}} source={{ uri: item.image_url }} />
                <Card.Content>
                <Text style={{marginTop:20, fontFamily:'Roboto-Con',fontSize:20}}>By {item.agency.name}</Text>
                <Text style={{ fontFamily:'Roboto-Con',fontSize:18}}>Founded {item.agency.founding_year}</Text>
                <Text style={{ fontFamily:'Roboto-Con',fontSize:16}}>Description:</Text>
                <Text style={{ fontFamily:'Roboto-Con',fontSize:16}}>{item.agency.description}</Text>
                </Card.Content>
                </Card>
               
                <View style={{width: '80%',alignSelf:'center'}}>
                
                </View>
            </View>
        )
    }
   
    render() {
        if(this.state.fontsLoaded){
        return (
            <View style={styles.container}> 
            
            <ImageBackground source={require('../assets/space.jpeg')}>
            <Text style={{textAlign:'center',marginTop:40,fontSize:50,color:'white',fontFamily:'Future-Now',marginBottom:20}}>Space Crafts</Text>  
            <FlatList data={this.state.aircrafts} keyExtractor={this.keyExtractor} renderItem={this.renderItem} horizontal={true}/>
            </ImageBackground>         
                
            </View>
        )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

