import React, { Component } from "react";
import Swiper from 'react-native-swiper'
import globalStyles from "../common/globalStyles";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class IntroScreen extends Component {
  
  render() {
    return (
      <View style={globalStyles.containerPrimary}>
          <Text>Intro Screen</Text>
          <Swiper style={globalStyles.wrapper} showsButtons={true}>
            <View>
              <Text>Hello Swiper</Text>
            </View>
            <View>
              <Text>Beautiful</Text>
            </View>
            <View style={globalStyles.containerPrimary}>
              <Text>And simple</Text>
              <TouchableOpacity style={globalStyles.nextWhite} onPress={() => this.props.navigation.navigate("Dashboard")}>
                <Text style={globalStyles.nextTextWhite}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </Swiper>
      </View>
    );
  }

}
