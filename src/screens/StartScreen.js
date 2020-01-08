import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeFlatName } from "../actions/Actions";
import globalStyles from "../common/globalStyles";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useSetSetupProgress from "../common/use-setSetupProgress";

export default function(props) {
  const flatName = useSelector(state => state.common.current.name);
  const dispatch = useDispatch();
  const setSetupProgressCB = useSetSetupProgress(1);

  function onNext() {
    debugger;
    setSetupProgressCB();
    props.navigation.navigate("addComponent");
  }


  return (
    <View style={globalStyles.containerPrimary}>
      <StatusBar backgroundColor="#f36363" barStyle="light-content" />
      <Text style={styles.h1}>Welcome to the App.</Text>
      <Text style={styles.h2}>Please enter the Organization's name.</Text>

      <View style={styles.wrapper}>
        <TextInput
          placeholder={"My Organization"}
          defaultValue={flatName ? flatName : ""}
          style={styles.textBox}
          name="orgName"
          onEndEditing={(e: any) =>
            dispatch(changeFlatName(e.nativeEvent.text))
          }
        />
      </View>
      <TouchableOpacity
        style={globalStyles.nextWhite}
        onPress={() => onNext()}
      >
        <Text style={globalStyles.nextTextWhite}>Next</Text>
        <Ionicons
          style={globalStyles.arrow}
          name={"ios-arrow-forward"}
          size={25}
          color={"#000000"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column"
  },
  textBox: {
    fontSize: 26,
    fontWeight: "bold",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 2,
    color: "white"
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
  }
});
