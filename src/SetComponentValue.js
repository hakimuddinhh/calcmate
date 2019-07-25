import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setComponentValue, updateTotalRent } from "./Actions";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput
} from "react-native";

class SetComponentValue extends Component {
  state = {
    tags: {},
    demo: false
  };

  setComponentValue(key, value) {
    this.props.setComponentValue(key, parseInt(value));
    this.props.updateTotalRent();
  }

  renderRentComponents(item) {}

  render() {
    return (
      <View style={{ marginTop: 22, flex: 1, flexDirection: "column" }}>
        <Text style={Styles.h2}>Set Component's Value</Text>
        <View style={Styles.container}>
          <ScrollView>
            <FlatList
              data={this.props.components.current}
              extraData={[this.props, this.state]}
              renderItem={({ item }) =>
                item.isAdded ? (
                  <View style={Styles.formGroup}>
                    <Text style={Styles.currency}>₹ </Text>
                    <TextInput
                      onEndEditing={(e: any) =>
                        this.setComponentValue(item.key, e.nativeEvent.text)
                      }
                      placeholder={"0"}
                      style={Styles.input}
                      keyboardType="numeric"
                    />
                    <Text style={Styles.label}>{item.key}</Text>
                  </View>
                ) : null
              }
            />
          </ScrollView>
        </View>
        <View style={Styles.formGroup}>
          <Text style={Styles.currency}>₹ </Text>
          <Text
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: 24,
              fontWeight: "bold"
            }}
          >
            {this.props.components.totalAmount}
          </Text>
          <Text style={Styles.label}>Total</Text>
        </View>
        <TouchableOpacity
          style={Styles.next}
          onPress={() => this.props.navigation.navigate("addMembers")}
        >
          <Text style={Styles.nextText}>Next</Text>
          <Ionicons
            style={Styles.arrow}
            name={"ios-arrow-forward"}
            size={25}
            color={"#ffffff"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  h2: {
    fontSize: 28,
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center"
  },
  currency: {
    fontSize: 22,
    marginTop: 10
  },
  container: {
    paddingRight: 20,
    height: 300,
    paddingLeft: 20,
    backgroundColor: "#f2f2f2",
    marginBottom: 20
  },
  formGroup: {
    flex: 1,
    flexDirection: "row"
  },
  input: {
    color: "#505050",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: "bold"
  },
  label: {
    color: "#ff0000",
    fontSize: 22,
    position: "absolute",
    right: 20,
    top: 10
  },
  next: {
    backgroundColor: "#f36363",
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
    marginTop: 4,
    color: "white"
  },
  arrow: {
    position: "absolute",
    right: 10,
    bottom: 9
  }
});

const mapStateToProps = state => {
  const { components, main } = state;
  return { components, main };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setComponentValue,
      updateTotalRent
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetComponentValue);
