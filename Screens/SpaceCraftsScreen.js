import React,{Component} from 'react';
import { Text, View ,StyleSheet,Alert} from 'react-native';
import axios from 'axios'
import MapView from 'react-native-maps';

export default class SpaceCraftsScreen extends Component {

   
    render() {


        return (
            <View style={styles.container}>            
                <Text>Space Crafts Screen</Text>
          
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

