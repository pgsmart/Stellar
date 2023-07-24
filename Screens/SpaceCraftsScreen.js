import React,{Component} from 'react';
import { Text, View ,StyleSheet,Alert} from 'react-native';
import axios from 'axios'
import MapView from 'react-native-maps';

export default class SpaceCraftsScreen extends Component {

    constructor(){
        super();
        this.state = {
            storage: ''
        }
    }

    componentDidMount=()=>{
        this.getIssLocation()
    }

    getIssLocation=()=>{
        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then((response)=>{this.setState({storage: response.data})})
        .catch(()=>{Alert.alert("Error")})
    }

    render() {

        console.log(this.state.storage)

        return (
            <View style={styles.container}>            
                <Text>Space Crafts Screen</Text>
            <View style={{flex:0.5,borderWidth:1}}>
                <MapView
                initialRegion={{
                    latitude: this.state.storage.latitude,
                    longitude: this.state.storage.longitude,
                    latitudeDelta: 100,
                    longitudeDelta: 100
                }}>
                </MapView>
            </View>
                <View>
                <Text>Latitude: {this.state.storage.latitude}</Text>
                <Text>Longitude: {this.state.storage.longitude}</Text>
                <Text>Name: {this.state.storage.name}</Text>
                <Text>Velocity: {this.state.storage.velocity}</Text>
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

