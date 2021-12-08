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
      <Pressable style={styles.backbutton} onPress={() => alert('Return')}>
      <Image  source={require('./assets/back.png')} style={styles.image2}/>
      </Pressable>
      <Pressable style={styles.button1} onPress={() => alert('Logo')}>
      <Image source={require('./assets/LogoZeta.png')} style={styles.image1}/>
      </Pressable>
      <Text style={{ fontFamily: 'Roboto', fontSize: 30, color: 'white', fontWeight: 'bold', bottom:"5%",}}>93.9</Text>
      <View style={styles.fixToText}>
      <Pressable onPress={() => alert('Previous')}>
      <Image style={styles.Scenebutton1} source={require('./assets/izquierda.png')} />
      </Pressable>
      <Pressable onPress={() => alert('Next')}>
      <Image style={styles.Scenebutton2} source={require('./assets/derecha.png')} />
      </Pressable>
      </View>
      <View style={styles.optionsPad}>
      <Pressable onPress={() => alert('List')}>
      <Image style={styles.Optionbutton1} source={require('./assets/lista.png')} />
      </Pressable>
      <Pressable onPress={() => alert('Liked')}>
      <Image style={styles.Optionbutton2} source={require('./assets/like.png')} />
      </Pressable>
      </View>
      <View style={styles.slidePad}>
      <Pressable onPress={() => alert('Volume down')}>
      <Image style={styles.image2} source={require('./assets/quiet.png')} />
      </Pressable>
      <StatusBar style="auto"/>
      <Slider
        style={{width: 200, height: 50}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
      />
      <Pressable onPress={() => alert('Volume up')}>
      <Image style={styles.image2} source={require('./assets/loud.png')} />
      </Pressable>
      </View>
      
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
  backbutton: {
    alignItems: "center",
    justifyContent: "center",
    bottom: "10%",
    right: "38%",
  },
  image1: {
    width: 170,
    height: 170,
    borderRadius:100,
  },
  image2: {
    width: 48,
    height: 48,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
    height: 175,
    borderRadius:100,
    backgroundColor: 'white',
    bottom: "10%",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "30%",
  },
  Scenebutton1: {
    width: 48,
    height: 48,
    bottom: "40%",
    right: "50%",
  },
  Scenebutton2: {
    width: 48,
    height: 48,
    bottom: "40%",
    left: "50%",
  },
  optionsPad:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: "10%",
    width: "60%",
  },
  Optionbutton1: {
    width: 40,
    height: 40,
    bottom: "0%",
    right: "20%",
  },
  Optionbutton2: {
    width: 40,
    height: 40,
    bottom: "0%",
    left: "20%",
  },
  slidePad:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: "20%",
  }
});