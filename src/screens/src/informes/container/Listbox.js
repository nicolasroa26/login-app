import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function Responsable() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 45, width: '100%'}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Hacienda" value="Hacienda" />
        <Picker.Item label="Tesoreria" value="Tesoreria" />
        <Picker.Item label="Prensa Gobierno en Linea." value="Prensa Gobierno en Linea." />
        <Picker.Item label="Personeria y Gobierno" value="Personeria y Gobierno" />
        <Picker.Item label="Contratacion" value="Contratacion" />
        <Picker.Item label="Sec. De Gobierno" value="Sec. De Gobierno" />
        
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor:'#ffffff',
    width: '80%',
    alignContent:'center',
    marginLeft:10
  }
});