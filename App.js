/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const ToDoStack = createNativeStackNavigator();

  return <SafeAreaView></SafeAreaView>;
}

export default App;
