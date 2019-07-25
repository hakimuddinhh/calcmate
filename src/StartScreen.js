import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeFlatName } from "./Actions";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f36363" barStyle="light-content" />
        <Text style={styles.h1}>Welcome to the App.</Text>
        <Text style={styles.h2}>Please enter the Organization's name.</Text>

        <View style={styles.wrapper}>
          <TextInput
            placeholder={"My Organization"}
            style={styles.textBox}
            name="orgName"
            onEndEditing={(e: any) =>
              this.props.changeFlatName(e.nativeEvent.text)
            }
          />
        </View>
        <TouchableOpacity
          style={styles.next}
          onPress={() => this.props.navigation.navigate("addComponent")}
        >
          <Text style={styles.nextText}>Next</Text>
          <Ionicons
            style={styles.arrow}
            name={"ios-arrow-forward"}
            size={25}
            color={"#000000"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column"
    // flex:1
  },
  textBox: {
    fontSize: 26,
    fontWeight: "bold",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 2,
    color: "white"
  },
  // textBox: {
  //  // height: 10,
  //  marginBottom: 20,
  //  fontSize: 32,
  //  color: 'red',
  //  borderBottomColor: '#f7941d',
  //  borderBottomWidth: 3
  // },
  container: {
    backgroundColor: "#f36363",
    flexDirection: "column",
    position: "relative",
    flex: 1
  },
  h1: {
    fontSize: 32,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  h2: {
    fontSize: 28,
    marginTop: 15,
    marginBottom: 15,
    color: "white",
    textAlign: "center"
  },
  next: {
    backgroundColor: "white",
    color: "#f36363",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    height: 45
  },
  nextText: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 4
  },
  arrow: {
    position: "absolute",
    right: 10,
    bottom: 9
  }
});

const mapStateToProps = state => {
  const { main } = state;
  return { main };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeFlatName
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen);
