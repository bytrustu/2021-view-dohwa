import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <>
      <StatusBar />
      <WebView source={{ uri: 'http://192.168.1.100:3000' }} style={{ marginTop: 50 }} />
    </>
  );
}
