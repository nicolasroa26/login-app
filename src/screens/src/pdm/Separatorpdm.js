import React from "react";
import {View} from "react-native";

export default function Separator() {
  return (
    <View
        style={{
            height: 1, 
            width: "100%", 
            backgroundColor: "#404040", 
            marginTop:5
        }}
      />
  );
}