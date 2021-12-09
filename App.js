import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  NativeModules,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./Inicio";
import List from "./List";

import img1 from "./assets/LogoZeta.png";
import img2 from "./assets/eb9ff1bc02ac9172812d091d341801d3.jpg";
import img3 from "./assets/s3066g.png";
import img4 from "./assets/logog.png";
import img5 from "./assets/download.jpg";
import imunlike from "./assets/like.png"
import imliked from "./assets/liked.png"

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./assets/Fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  var [count, setCount] = useState(1);
  var stations = [93.9, 95.5, 96.3, 99.3, 100.3];
  var images = [img1, img2 ,img3, img4, img5];
  var [station, setStation] = useState(stations[0]);
  var [image, setImage] = useState(images[0]);
  var [corazon, setcorazon] = useState(imunlike);
  var [liked, setliked] = useState(false);


  return (
    <View style={styles.container}>
      <Pressable style={styles.backbutton} onPress={() => navigation.goBack()}>
        <Image source={require("./assets/back.png")} style={styles.image2} />
      </Pressable>
      <View style={styles.button1}>
        <Image source={image} style={styles.image1} />
      </View>
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 30,
          color: "white",
          fontWeight: "bold",
          bottom: "5%",
        }}
      >
        {station}
      </Text>
      <View style={styles.fixToText}>
        <Pressable style={styles.acomodo1}
          onPress={() => {
            setCount(count - 1);
            setStation(stations[count % stations.length]);
            setImage(images[count % images.length]);
          }}
        >
          <Image
            style={styles.Scenebutton1}
            source={require("./assets/izquierda.png")}
          />
        </Pressable>
        <Pressable style={styles.acomodo2}
          onPress={() => {
            setCount(count + 1);
            setStation(stations[count % stations.length]);
            setImage(images[count % images.length]);
          }}
        >
          <Image
            style={styles.Scenebutton2}
            source={require("./assets/derecha.png")}
          />
        </Pressable>
      </View>
      <View style={styles.optionsPad}>
        <Pressable onPress={() => navigation.navigate("List")}>
          <Image
            style={styles.Optionbutton1}
            source={require("./assets/lista.png")}
          />
        </Pressable>
        <Pressable onPress={() =>{
          if(liked){
            setliked(false);
            setcorazon(imunlike);
          }else{
            setliked(true);
            setcorazon(imliked);
          }
        }}>
          <Image
            style={styles.Optionbutton2}
            source={corazon}
          />
        </Pressable>
      </View>
      <View style={styles.slidePad}>
        <Pressable onPress={() => alert("Volume down")}>
          <Image
            style={styles.image22}
            source={require("./assets/quiet.png")}
          />
        </Pressable>
        <StatusBar style="auto" />
        <Slider
          style={{ width: 250, height: 50 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
        />
        <Pressable onPress={() => alert("Volume up")}>
          <Image style={styles.image22} source={require("./assets/loud.png")} />
        </Pressable>
      </View>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000099",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",

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
    borderRadius: 100,
  },
  image2: {
    width: 30,
    height: 30,
  },
  image22: {
    width: 30,
    height: 30,
    top: 10,
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    width: 175,
    height: 175,
    borderRadius: 100,
    backgroundColor: "white",
    bottom: "10%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
  },
  Scenebutton1: {
    width: 48,
    height: 48,
    bottom: "40%",
    
  },
  Scenebutton2: {
    width: 48,
    height: 48,
    bottom: "40%",
    
  },
  acomodo1:{
    right: "50%"
  },
  acomodo2:{
    left: "50%"
  },
  optionsPad: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  slidePad: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "20%",
  },
});
