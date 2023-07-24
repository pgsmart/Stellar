import React,{Component} from 'react';
import { Text, View,StyleSheet ,TouchableOpacity,ImageBackground,StatusBar,Platform,Image} from 'react-native';
export default class HomeScreen extends Component {
    render() {
       

        return (
            <View style={styles.container}>
                  <ImageBackground style={styles.bgImage} source={require('../assets/space.gif')}>        
                <Text style={{color:'white',alignSelf:'center',fontSize:30,
            marginTop: Platform.OS == 'android' ? StatusBar.height : 0}}>Stellar App</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                    this.props.navigation.navigate('SpaceCrafts')
                }}>
                <Image style={styles.image} source={require('../assets/space_crafts.png')}></Image>
                <Text style={{color:'white'}}>Space Crafts Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                    this.props.navigation.navigate('StarMap')
                }}>
                <Image style={styles.image} source={require('../assets/star_map.png')}></Image>
                <Text style={{color:'white'}}>Star Map</Text>
                </TouchableOpacity>
                </ImageBackground> 
            </View>
        )
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
        borderWidth: 1,
        width: '50%',
        height: 30,
        alignItems: "flex-start",
        borderColor: 'white',
        flex: 0.1,
        alignSelf:'center',
        justifyContent: 'center',
        flexDirection:'row-reverse'
    
    },
    bgImage:{
        resizeMode: 'cover',
        width: "100%",
        height: "100%"
    },
    image:{
        resizeMode:'contain',
        width:'30%',
        height:'70%'
    }
})
