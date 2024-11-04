import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductViewScreen from '../screens/ProductViewScreen';
import ProductEditScreen from '../screens/ProductEditScreen';
import ShopViewScreen from '../screens/ShopViewScreen';

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator initialRouteName='ShopView' screenOptions={{ headerShown: false }}>
       <Stack.Screen
        name='ShopView'
        component={ShopViewScreen}
        options={{ title: "View Shop" }}
      />
      <Stack.Screen
        name='ProductView'
        component={ProductViewScreen}
        options={{ title: "View Shop" }}
      />
      <Stack.Screen
        name='ProductEdit'
        component={ProductEditScreen}
        options={{ title: "View Shop" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});