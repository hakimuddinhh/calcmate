import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import { addExpense } from '../actions/Actions';
// import Contacts from 'react-native-contacts';
import { Header } from "../common/header";
import { AddExpenses } from "../common/modal";

// import { ListView } from './common/ListView';

class ExpensesScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isExpenseModalVisible: false,
    selected: { uid: null, name: null, amount: null, component: null }
  };

  setExpenseModalVisible(state) {
    if (typeof state === "boolean") {
      this.setState({ isExpenseModalVisible: state });
    }
  }

  generateExpensesList(component) {
    const expenses = Object.keys(component.budget.used);
    if (expenses.length) {
      let list = [];
      expenses.map(uid => {
        const expense = component.budget.used[uid];
        list.push(
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              this.onItemPress(uid, expense);
            }}
          >
            <View style={styles.row}>
              <Text style={styles.cardHead}>{expense.key}</Text>
              <Text style={styles.cardAmount}>{expense.amount}</Text>
            </View>
            <View>
              <Text style={styles.cardType}>{expense.component}</Text>
            </View>
          </TouchableOpacity>
        );
      });
      return list;
    }
  }

  onItemPress(uid, expense) {
    this.setExpenseModalVisible(true);
    this.setState({
      selected: {
        uid: uid,
        name: expense.key,
        amount: expense.amount,
        component: expense.component
      }
    });
  }

  addExpense(details) {
    this.props.addExpense(details);
    this.setState({ isExpenseModalVisible: false });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header
          headerText={"Expenses"}
          openDrawer={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
          <ScrollView style={styles.scrollContainer}>
            <FlatList
              data={this.props.components.current}
              extraData={this.props}
              renderItem={({ item }) =>
                item.isAdded ? (
                  <View>{this.generateExpensesList(item)}</View>
                ) : null
              }
            />
          </ScrollView>
        </View>
        <AddExpenses
          components={this.props.components}
          modalVisibility={this.state.isExpenseModalVisible}
          expenseName={this.state.selected.name}
          expenseAmount={this.state.selected.amount}
          expenseComponent={this.state.selected.component}
          expenseUid={this.state.selected.uid}
          addExpense={(details) => {
            this.addExpense(details);
          }}
          changeVisibility={state => {
            this.setState({ isExpenseModalVisible: state });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flex: 1
  },
  container: {
    paddingRight: 20,
    height: 600,
    paddingLeft: 20,
    backgroundColor: "#f2f2f2",
    marginBottom: 20,
    flexDirection: "column",
    flex: 1
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    marginTop: 15
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userHead: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  card: {
    backgroundColor: "#ffffff",
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 8
  },
  cardHead: {
    fontSize: 18
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: "bold"
  },
  cardType: {
    fontSize: 14,
    color: "#cccccc"
  }
});

const mapStateToProps = state => {
  const { components } = state;
  return { components };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
   addExpense
  },    dispatch ));

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesScreen);
