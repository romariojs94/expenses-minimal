import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts, IBMPlexMono_400Regular, IBMPlexMono_600SemiBold } from '@expo-google-fonts/ibm-plex-mono';

import Home from './src/pages/Home';

export default function App() { 
  
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexMono_400Regular, IBMPlexMono_600SemiBold
  });
  
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <View>
        <StatusBar style="light" backgroundColor='#000' translucent={true} />
        <Home />
      </View>
    </>
  );
}