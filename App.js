import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Onboarding from './src/screen/Onboarding';
import Login from './src/screen/Login';
import ForgetPassword from './src/screen/ForgetPassword';
import MobileNumber from './src/screen/MobileNumber';
import Otp from './src/screen/Otp';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

import * as Font from 'expo-font';

const customFonts = {
  "CircularStd-Bold": require("./assets/font/CircularStd-Bold.ttf"),
  "Nunito-Bold": require("./assets/font/Nunito-Bold.ttf"),
  "Nunito-ExtraBold": require("./assets/font/Nunito-ExtraBold.ttf"),
  "Nunito-SemiBold": require("./assets/font/Nunito-SemiBold.ttf"),
  "Poppins-Bold": require("./assets/font/Poppins-Bold.ttf"),
};

export default function App() {

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  }

  useEffect(() => {
    _loadAssetsAsync();
  });

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar />
      <TabNavigator />
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  );
}

