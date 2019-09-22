import React from "react";

import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableHighlight
} from "react-native";

const availableZipItems = [
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
  { place: "Home", code: "92140"}
];
const ZipItem = ({ place, code, navigate }) => (
  <TouchableHighlight onPress={() => navigate("Weather", { zipCode: code })}>
    <View style={styles.zipItem}>
      <Text style={styles.zipPlace}>{place}</Text>
      <Text style={styles.zipCode}>{code}</Text>
    </View>
  </TouchableHighlight>
);

const _keyExtractor = item => item.code;
export default class ZipCodeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text style={styles.appBar}> Choose a zip code</Text>
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.backdrop}>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  zipItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 15,
    marginBottom: 15
  },
  zipPlace: {
    marginLeft: 50,
    fontSize: 18,
    fontWeight: "bold"
  },
  zipCode: {
    marginRight: 50,
    fontSize: 18
  },
  appBar: {
    fontSize: 20,
    fontWeight: "bold"
  },
  backdrop: {
    backgroundColor: "rgba(120,231,255,1)"
  }
});
