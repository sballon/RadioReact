import React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

const List = ({ navigation }) => {
  return (
    <View style={styles.backg}>
      <Pressable style={styles.buttonregreso} onPress={() => navigation.goBack()}>
        <Image source={require("./assets/back.png")} style={styles.image2} />
      </Pressable>
      <SectionList
        style={styles.cont}
        sections={[
          { title: "90 FM", data: ["92.3", "93.9", "96.3", "98.5", "99.3"] },
          { title: "100 FM", data: ["100.3", "101.7", "107.5"] },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backg: {
    flex: 1,
    backgroundColor: "#000099",
    paddingTop: "3%",
  },
  image2: {
    width: 30,
    height: 30,
    
  },
  buttonregreso: {
    top: 20,
    left: 12,
  },
  cont: {
    marginTop: "10%",
  },
  sectionHeader: {
    paddingTop: "2%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#ffff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "white",
  },
});

export default List;
