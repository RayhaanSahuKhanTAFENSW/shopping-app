import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider, useTheme } from './components/ThemeContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

function Main() {
  const { theme } = useTheme();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style='auto' />
    </PaperProvider>
  );
}