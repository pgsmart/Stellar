import React,{Component} from 'react';
import { Text, View,StyleSheet ,TouchableOpacity,ImageBackground,StatusBar,Platform,Image} from 'react-native';
import * as Font from 'expo-font';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        }
      }
    
      async loadFonts() {
        await Font.loadAsync({
          'Bungee-Spice': require('../assets/fonts/BungeeSpice-Regular.ttf'),
          'Future-Now': require('../assets/fonts/FutureNowRegular-25Bl.ttf'),
          'Bricolage': require('../assets/fonts/BricolageGrotesque.ttf')
        });
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFonts();
      }

    render() {
       
        if(this.state.fontsLoaded){
        return (
            <View style={styles.container}>
                  <ImageBackground style={styles.bgImage} source={require('../assets/space.gif')}>        
                <Text style={{fontFamily:'Future-Now',color:'white',alignSelf:'center',fontSize:60,
            marginTop: 20, marginBottom:30}}>Stellar App</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                    this.props.navigation.navigate('SpaceCrafts')
                }}>
                <Image style={styles.image} source={require('../assets/space_crafts.png')}></Image>
                <Text style={{color:'white',fontFamily:'Bricolage',fontSize:30,}}>Space Crafts Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                    this.props.navigation.navigate('StarMap')
                }}>
                <Image style={styles.image} source={require('../assets/star_map.png')}></Image>
                <Text style={{color:'white',fontFamily:'Bricolage',fontSize:30,}}>Star Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                    this.props.navigation.navigate('DailyPic')
                }}>
                <Image style={styles.image} source={require('../assets/daily_pictures.png')}></Image>
                <Text style={{color:'white',fontFamily:'Bricolage',fontSize:30,}}>Daily Pic</Text>
                </TouchableOpacity>
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
    },
    buttonStyle: {
        borderRadius: 25,
        borderWidth: 4,
        width: '80%',
        borderColor: 'white',
        flex: 0.14,  
        flexDirection:'row-reverse',
        margin: 30,
        display: 'flex' ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgImage:{
        resizeMode: 'cover',
        width: "100%",
        height: "100%"
    },
    image:{
        resizeMode:'contain',
        width:'20%',
        height:'90%',
        marginLeft:10
    },
    title:{

    },
    buttonText:{
        
    }
})
