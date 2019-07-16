import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Header extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Button 
         buttonStyle={styles.button}
         title={''}
         onPress={() => this.props.openDrawer()}
         icon={<Ionicons name={'md-menu'} size={25} color={'#000000'} />}
        />
        <Text style={styles.headerText}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 70
  },

  headerText: {
    backgroundColor: '#F5FCFF',
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    flexBasis: '80%'
      },
  button: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    borderColor: 'red',
    flexBasis: '20%',

  }
});
