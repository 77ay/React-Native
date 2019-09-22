import React from "react";
import Forecast from "./Forecast";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: "Main",
        description: "Description",
        temp: 0
      }
    };
  }

  fetchData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          forecast: {
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };

  componentDidMount = () => this.fetchData();

  componentDidUpdate = prevProps => {
    if (prevProps.zipCode !== this.props.zipCode) {
      this.fetchData();
    }
  };

  render() {
    return (
      <ImageBackground source={require("../bg.jpeg")} style={styles.backdrop}>
        <View style={styles.container}>
          <Text style={styles.title}>Zip code is {this.props.zipCode}.</Text>
          <Forecast {...this.state.forecast} style={styles.data} />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 400
  },
  title: {
    fontSize: 30,
    color: "white"
  },
  backdrop: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
