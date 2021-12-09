import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from "react-native";

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.backg}>
      <Image
        source={require("./assets/LogoRadioReact.png")}
        style={styles.logo}
      />
      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("Home", { name: "RadioReact" })}
      >
        <Text style={{ color: "black" }}>
          <Image
            source={require("./assets/Logogoogle.png")}
            style={styles.google}
          />  Iniciar seción con Google
        </Text>
      </Pressable>

      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("Home", { name: "RadioReact" })}
      >
        <Text style={{ color: "black" }}>Iniciar por Correo Electronico</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backg: {
    flex: 1,
    backgroundColor: "#000099",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    height: "15%",
    resizeMode: "contain",
    bottom: "5%",
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "white",
    top: "20%",
    marginBottom: 30,
  },
  google: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});

export default Inicio;
