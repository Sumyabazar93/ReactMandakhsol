import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, TextInput, SafeAreaView, Pressable, } from 'react-native';

export default function App() {
  const callAlert = () => {
    alert("Button clicked onPress");
  }
  const callAlertLong = () => {
    alert("Button clicked onLongPress");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Pressable
          onPress={() => { callAlert() }}
          onLongPress={() => { callAlertLong() }}
        >
          <Text style={{ color: 'black', fontSize: 30, textAlign: 'center' }} > My first app!</Text>
          <Image source={require("/Users/sumyabazarbayarkhuu/Desktop/React Mandakh/minii1/back.jpeg")} style={{ height: 1000, width: 1000 }} />
        </Pressable>

        <Button
          title="Click me"
          color="black"
          onPress={() => { callAlert() }}
          onLongPress={() => { callAlertLong() }}
        ></Button>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  ontainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

/*
1. Nuur tsonh design EXPO deer zurna
2. Ashgalsan buh compinatuuda onpress(alert) bolon Onlongpress(alert long press) deer alert duudag bolno
3. 
*/