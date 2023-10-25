/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

function App() {
  const ToDoStack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      <Text>Test</Text>
    </SafeAreaView>
  );
}

export default App;
