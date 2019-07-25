import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { changeFoodValue } from './Actions';

import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "./common/header";
import { AddExpenses } from "./AddExpenses";
import { ListView } from "./common/ListView";
import { addExpense } from './Actions';
import Ionicons from "react-native-vector-icons/Ionicons";

class Dashboard extends Component {
  state = { isExpenseModalVisible: false };

  calcTotalContribution(datas) {
    let total = 0;
    for (let data of datas) {
      total += data.value;
    }
    return total;
  }

  setExpenseModalVisible(state) {
    if (typeof state === "boolean") {
      this.setState({ isExpenseModalVisible: state });
    }
  }

  addExpense(details) {
    this.props.addExpense(details);
    this.setState({ isExpenseModalVisible: false });
  }

  render() {
    return (
      <View style={{ marginTop: 22, flex: 1, flexDirection: "column" }}>
        <Header
          headerText={"Dashboard"}
          openDrawer={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.row}>
          <Text style={styles.smallHeader}>
            {this.props.main.current.month}
          </Text>
          <Text style={styles.mediumHeader}>
            {this.props.components.totalAmount}
          </Text>
        </View>
        <ListView
          type={"rentDetails"}
          listData={this.props.components.current}
        />
        <TouchableOpacity
          style={styles.addIcon}
          onPress={() => {
            this.setState({ isExpenseModalVisible: true });
          }}
        >
          <Ionicons name={"md-add-circle"} size={50} color={"#f7941d"} />
          <Text style={{ color: 'grey' }}>Expense</Text>
        </TouchableOpacity>
        <AddExpenses
          components={this.props.components}
          modalVisibility={this.state.isExpenseModalVisible}
          addExpense={(details) => {
            this.addExpense(details);
          }}
          changeVisibility={(state) => {
            this.setState({ isExpenseModalVisible: state });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  row: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 12,
    paddingLeft: 5,
    paddingRight: 5
  },
  smallHeader: {
    fontSize: 26,
    fontFamily: "Montserrat-SemiBold"
  },
  mediumHeader: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Montserrat-Bold"
  },
  activeTitle: {
    color: "red"
  },

  addIcon: {
    position: "absolute",
    bottom: 15,
    right: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  const { main, components } = state;
  return { main, components };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({   
   addExpense
  },    dispatch ));

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
