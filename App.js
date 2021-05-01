
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/screen/HomeScreen';
import OnBoardScreen from './src/views/screen/OnBoardScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailsScreen from './src/views/screen/DetailsScreen';
import CartScreen from './src/views/screen/CartScreen'


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoardScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
