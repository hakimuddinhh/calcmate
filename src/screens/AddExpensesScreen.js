import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
  TouchableOpacity,
  Picker
} from "react-native";
import { onChangeInput } from "../actions/Actions";

class AddExpensesScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    key: '',
    amount: '',
    components: '',
    currentComponent: ''
  };

  componentDidMount() {
    debugger;
    this.setState({key: this.props.expenseName,
    amount: this.props.expenseAmount,
    components: this.props.components.current,
    currentComponent: this.props.expenseComponent});

  }

  onChangeText(text, type) {
    switch (type) {
      case "name":
        this.setState({ name: text });
        break;

      case "amount":
        this.setState({ amount: text });
        break;

      default:
        break;
    }
    this.props.onChangeInput({ name: type, value: text });
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisibility}
        onRequestClose={() => {}}
      >
        <View style={{ marginTop: 22 }}>
          <Button
            title={"Close"}
            onPress={() => this.props.changeVisibility(false)}
          />
          <View>
            <Text>Add Expense</Text>
            <TextInput
              placeholder={"Expense Name"}
              style={styles.textBox}
              value={this.state.name}
              name="name"
              onChangeText={text => this.onChangeText(text, "name")}
            />

            <TextInput
              keyboardType="numeric"
              placeholder={"Amount"}
              maxLength={10}
              value={this.state.amount}
              style={styles.textBox}
              name="amountPaid"
              onChangeText={text => this.onChangeText(text, "amount")}
            />

            <Picker
              mode="dropdown"
              selectedValue={
                this.state.currentComponent
              }
              onValueChange={text => {
                this.setState({ currentComponent: text });
              }}
            >
              {Object.keys(this.state.components).map(i => {
                if (this.state.components[i].isAdded) {
                  return (
                    <Picker.Item
                      label={this.state.components[i].key}
                      value={this.state.components[i].key}
                      key={this.state.components[i].key}
                    />
                  );
                }
              })}
            </Picker>

            <Button
              title={"Save"}
              onPress={text => {
                if (this.props.addExpense) {
                  this.props.addExpense({
                    uid: this.props.expenseUid,
                    key: this.state.name || this.props.expenseName,
                    amount: this.state.amount || this.props.expenseAmount,
                    component:
                      this.state.currentComponent || this.props.expenseComponent
                  });
                }
              }}
            />
          </View>
        </View>
      </Modal>
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
  const { inputs } = state;
  return { inputs };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onChangeInput }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpensesScreen);
