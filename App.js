import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import StarMapScreen from './Screens/StarMapScreen';
import SpaceCraftsScreen from './Screens/SpaceCraftsScreen';
import DailyPicScreen from './Screens/DailyPicScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='SpaceCrafts' component={SpaceCraftsScreen}/>
        <Stack.Screen name='DailyPic' component={DailyPicScreen}/>
        <Stack.Screen name='StarMap' component={StarMapScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
  );
}
