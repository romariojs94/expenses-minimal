import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <> 
    <View style={styles.container}>
      <View>
        <StatusBar style="auto" translucent={true} />
      </View>
      <View>
        <Text style={styles.heading}>Expenses Minimal</Text>  
        <Text style={styles.totPrice}>R$ 2.000,56</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
