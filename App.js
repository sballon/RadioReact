import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image , View, Button, NativeModules, TouchableOpacity, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    Roboto: require('./assets/Fonts/Roboto-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    
    <View style={styles.container}>
      <Image source={require('./assets/LogoZeta.png')} style={styles.image1}/>
      
      <Text style={{ fontFamily: 'Roboto', fontSize: 30, color: 'white', fontWeight: 'bold',}}>93.9</Text>
      <Pressable style={styles.button1} onPress={() => alert('Simple Button pressed')}>
      <Image source={require('./assets/LogoZeta.png')} style={styles.image1}/>
      </Pressable>
      
      <StatusBar style="auto"/>
      <Slider
        style={{width: 250, height: 50}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000099',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  baseText: {
    fontWeight: 'bold',
    
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

    padding: 100,
  },
  slide: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  image1: {
    width: 170,
    height: 170,
    borderRadius:100,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'black'
  },
});