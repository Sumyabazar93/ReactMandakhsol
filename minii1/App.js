import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My first app!</Text>
      <Text>My first app!</Text>
      <Image source={"./assets/mycena-leaiana-mushroom-grape-vine-winter-early-inmage-single-orange-southwestern-ontario-166252328.jpeg"} style={{height:200, width:200}}/>
      <StatusBar style="auto" />
    </View>
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
