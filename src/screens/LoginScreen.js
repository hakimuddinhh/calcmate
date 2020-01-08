import React, { useState, useEffect } from "react";
import globalStyles from "../common/globalStyles";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import axios from 'axios';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { setSession } from '../actions/Actions';
import constants from '../constants/url';

export default function(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const userData = useSelector(state => state.user.current);
  const dispatch = useDispatch();

  // check if session exists on initialisation
  useEffect(() => {
    // if(userData) {
    //   props.navigation.navigate('SetupScreen')
    // }
    // const url = constants.url;
    // axios.get(url, {
    //   'Content-Type': 'application/json',
    // }).then((response) => {
    //   debugger;
    //   if(response.data.user) {
    //     const {username, email, phone_number} = response.data.user;
    //   }
    // }).catch((error) => {
    //   debugger;
    //   setError(error.response.data.message);
    //   // console.error(error);
    // });
  }, [])

  function login(e) {
    const loginUrl = constants.url + 'login';
    const userData = {email, password};
    axios.post(loginUrl, userData, {
      'Content-Type': 'application/json',
    }).then((response) => {
      debugger;
      if(response.data.length > 0) {
        dispatch(setSession(response.data[0]));
        // const {username, email, phone_number} = response.data[0];
        props.navigation.navigate('SetupScreen');
      }
    }).catch((error) => {
      setError(error.response.data.message);
      // console.error(error);
    });
  }


  return (
        <View style={globalStyles.containerWhite}>
          <View style={globalStyles.kingHeader}>
            <Text style={globalStyles.kingHeaderText}>App Name</Text>
          </View>
          <View style={Styles.formContainer}>
              <TextInput
                style={globalStyles.input}
                placeholder='Email'
                autoCapitalize="none"
                placeholderTextColor='grey'
                onChangeText={val => setEmail(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='grey'
                onChangeText={val => setPassword(val)}
              />

          </View>
              <View style={Styles.signupNavigateContainer}>
                <Text>Don't have an account ? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignupScreen')}>
                  <Text> Signup</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={login} style={globalStyles.nextPrimary}>
                <Text style={globalStyles.nextTextPrimary} >Log In</Text>
              </TouchableOpacity>
              <Snackbar
              visible={error}
              duration={15000}
              onDismiss={() => setError(null)}
              action={{
                label: 'Undo',
                onPress: () => {
                  // Do something
                },
              }}
              >
              {error}
              </Snackbar>
          </View>
  );

}

const Styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 80,
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#ffffff"
  },

  signupNavigateContainer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    height: 45,
    alignSelf: "center",
    justifyContent: "center"

  }


})
