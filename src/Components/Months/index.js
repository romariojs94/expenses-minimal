import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Despesas() {
  return (
    <View style={styles.container}>
      <Text style={styles.salMes}>Salário - <Text style={styles.mes}>Setembro</Text></Text>
      <Text style={styles.tag}>R$3.450,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  salMes: {
    fontFamily: 'IBMPlexMono_600SemiBold',
    fontSize: 16,
    color: '#0A0A0A', 
  },  
  mes: {
    fontFamily: 'IBMPlexMono_400Regular',
    fontSize: 12,
  },  
  tag: {
    fontFamily: 'IBMPlexMono_400Regular',
    fontSize: 16,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 8,
    padding: 4
  }
})