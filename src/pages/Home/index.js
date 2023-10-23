import React from 'react';

import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Months from '../../Components/Months';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 64;
export default function Home() {

  return (
   <View style={styles.container}>
      <Text style={styles.heading}>Expenses Minimal</Text>
      <Text style={styles.price}>R$ 2.000,56</Text>
      <Months />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
  },
  heading: {
    fontFamily: 'IBMPlexMono_600SemiBold',
    fontSize: 24,
    color: '#0A0A0A',
    textAlign: 'center'
  },
  price: {
    fontFamily: 'IBMPlexMono_400Regular',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },

});