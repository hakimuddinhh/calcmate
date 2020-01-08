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

export default function() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');

  useEffect(() => {
  })

  function register(e) {
    debugger;
    const registerUrl = 'http://192.168.43.126:3000/register';
    const userData = {username, password, email, phone_number};
    axios.post(registerUrl, userData, {
      'Content-Type': 'application/json',
    }).then((response) => {
      debugger;
      if(response.data.length > 0) {
        props.navigation.navigate('SetupScreen')
      }
    }).catch((error) => {
      console.error(error);
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
                placeholder='Username'
                autoCapitalize="none"
                placeholderTextColor='grey'
                onChangeText={val => setUsername(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='grey'
                onChangeText={val => setPassword(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder='Email'
                autoCapitalize="none"
                placeholderTextColor='grey'
                onChangeText={val => setEmail(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder='Phone Number'
                autoCapitalize="none"
                placeholderTextColor='grey'
                onChangeText={val => setPhone_number(val)}
              />

              <View>
                <Text>Log In with Google</Text>
              </View>

          </View>
              <TouchableOpacity onPress={register} style={globalStyles.nextPrimary}>
                <Text style={globalStyles.nextTextPrimary} >Sign up</Text>
              </TouchableOpacity>
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
  }
})
