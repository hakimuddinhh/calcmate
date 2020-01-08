import React, { Component } from "react";
import globalStyles from "../common/globalStyles";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class SetupScreen extends Component {

  render() {
    return (
      <View style={globalStyles.containerPrimary}>
          <Text>Setup Screen</Text>
      </View>
    );
  }
}

