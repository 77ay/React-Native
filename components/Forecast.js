import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Forecast extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={{ color:'white', fontSize: 42 }} >{this.props.main}</Text>
        <Text style={{ color:'white', fontSize: 26 }} >{this.props.description}</Text>
        <View style={styles.degree}>
          <Text style={{ color:'white', fontSize: 38 }} >{this.props.temp}</Text>
          <Text style={{ color:'white', fontSize: 32 , paddingTop: 5}} > °c</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  degree: {
    flexDirection: 'row',
  }
});




