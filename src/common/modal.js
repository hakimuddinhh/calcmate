import React, { Component } from "react";
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

class AddExpenses extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: null,
    amount: null,
    components: this.props.components.current,
    currentComponent: null
  };

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
              name="name"
              onChangeText={text => this.setState({ name: text })}
            />

            <TextInput
              keyboardType="numeric"
              placeholder={"Amount"}
              maxLength={10}
              style={styles.textBox}
              name="amountPaid"
              onChangeText={text => this.setState({ amount: text })}
            />

            <Picker
              mode="dropdown"
              selectedValue={this.state.currentComponent}
              onValueChange={text => {
                this.setState({ currentComponent: text });
              }}
            >
              {Object.keys(this.state.components).map(i => {
                if(this.state.components[i].isAdded) {
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
              title={"Add"}
              onPress={text => {
                this.props.addExpense({
                  key: this.state.name,
                  amount: this.state.amount,
                  component: this.state.currentComponent
                });
              }}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({

});

export { AddExpenses };
