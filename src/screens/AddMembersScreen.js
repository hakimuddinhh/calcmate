import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMember, removeMember } from "../actions/Actions";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity
} from "react-native";

class AddMembersScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = { modalVisible: false, name: null, amountPaid: null };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  saveNewMember() {
    this.props.addMember({
      name: this.state.name,
      amountPaid: this.state.amountPaid
    }, this.props.components);
    this.setModalVisible(false);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>
          Contribution to be paid -> {this.props.components.totalAmount}
        </Text>
        <ScrollView>
          <FlatList
            extraData={this.props}
            data={this.props.members.memberList}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <View style={styles.userHead}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={{
                      uri:
                        "https://facebook.github.io/react-native/docs/assets/favicon.png"
                    }}
                  />
                  <Text style={styles.item}>{item.key} </Text>
                </View>
                <View>
                  <Text>Total: {item.contribution.total}</Text>
                  <Text>Paid: {item.contribution.paid}</Text>
                  <Text>Due: {item.contribution.due}</Text>
                </View>
                <View>
                  <Button
                    title={"Remove"}
                    onPress={() => this.props.removeMember(item.key)}
                  />
                </View>
              </View>
            )}
          />
          <Button
            title={"Add New Member"}
            onPress={() => this.setModalVisible(true)}
          />

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}
          >
            <View style={{ marginTop: 22 }}>
              <Button
                title={"Close"}
                onPress={() => this.setModalVisible(false)}
              />
              <View>
                <Text>Add Member</Text>
                <TextInput
                  placeholder={"Member Name"}
                  style={styles.textBox}
                  name="name"
                  onChangeText={text => this.setState({ name: text })}
                />

                <TextInput
                  keyboardType="numeric"
                  placeholder={"Contribution Paid"}
                  maxLength={10}
                  style={styles.textBox}
                  name="amountPaid"
                  onChangeText={text => this.setState({ amountPaid: text })}
                />
                <Button title={"Add"} onPress={() => this.saveNewMember()} />
              </View>
            </View>
          </Modal>
        </ScrollView>
        <TouchableOpacity
          style={styles.next}
          onPress={() => this.props.navigation.navigate("Dashboard")}
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
  mainContainer: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#f36363"
  },
  userHead: {},
  row: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  item: {
    color: "grey",
    fontSize: 20
  },
  textBox: {
    // height: 10,
    marginBottom: 20,
    fontSize: 32,
    color: "red",
    borderBottomColor: "#f7941d",
    borderBottomWidth: 3
  },
  value: {
    color: "grey",
    fontSize: 20,
    fontWeight: "bold"
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
  const { members, components } = state;
  return { members, components };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addMember,
      removeMember
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMembersScreen);
