import React from "react";
import Weather from "./Weather";
import { StyleSheet, Text, View, Button } from "react-native";

export default class WeatherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text style={styles.appBar}>   Weather</Text>) ,
      headerRight: (
        <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')} />
      )};
  };
  render() {
      const zipCode = this.props.navigation.getParam('zipCode')
    return (
        <Weather zipCode={zipCode} />
    );
  }
}

const styles = StyleSheet.create({
    appBar: {
        fontSize: 20,
        fontWeight: "bold"
    },
})
  


