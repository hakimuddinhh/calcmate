import React, { Component } from "react";
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
  Alert
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, store } from "redux";
import { addMember, removeMember, updateMemberDetails } from "../actions/Actions";
// import Contacts from 'react-native-contacts';
import { Header } from "../common/header";

// import { ListView } from './common/ListView';

class MembersScreen extends Component {
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

    this.props.updateMemberDetails(this.props.components);
    

    this.setModalVisible(false);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header
          headerText={"Members"}
          openDrawer={() => this.props.navigation.toggleDrawer()}
        />
        <ScrollView>
          <Text>ABCDEF</Text>

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
                    onPress={() => {
                      this.props.removeMember(item.key);
                      this.props.updateMemberDetails(this.props.components);
                    }}
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
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flex: 1
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
      removeMember,
      updateMemberDetails
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersScreen);
