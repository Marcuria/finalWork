import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar} from "./src/NavBar";
import { Enternumb } from "./src/Enteranumber";


export default function App() {
  return (
    <View style={styles.container}>
      <NavBar title="some app"/>
      <View style={styles.container}>
        <Enternumb />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30, 
    paddingVertical: 20
  }
});
