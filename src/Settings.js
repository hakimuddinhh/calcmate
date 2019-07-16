import React, { Component } from 'react';
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { ScrollView, View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Header } from './common/header';
import ContributionComponents from './ContributionComponents';

export default class Settings extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

	render() {
		return (
			<ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex:1, flexDirection: 'column',}}>
				<Header headerText={'Settings'} openDrawer={() => this.props.navigation.toggleDrawer()} />
				 <View style={Styles.wrapper}>
				  <TextInput
				 	placeholder={'Add Name'}
			        style={Styles.textBox}
			      />
			      <TextInput
				 	placeholder={'Members Count'}
			        style={Styles.textBox}
			      />
			      <ContributionComponents modalVisible={this.state.modalVisible} toggleModalVisible={() => this.setModalVisible(false)} />
			     </View>

	    		 <Button title={'Add Components'} onPress={() => this.setModalVisible(true)} />
	    		 <View style={{position: 'absolute', bottom: 0, right: 0}}>
	    		 <Button style={Styles.nextBtn} title={'Next'} onPress={() => this.setModalVisible(true)} />
				 </View>
			</ScrollView >
		);
	}	
}

const Styles = StyleSheet.create({

 wrapper: {	
 	flexDirection: 'column',
 	// flex:1
 },	
 textBox: {
 	// height: 10,
 	marginBottom: 20,
 	fontSize: 32,
 	color: 'red',
 	borderBottomColor: '#f7941d',
 	borderBottomWidth: 3
 },
 nextBtn: {
 	width: 50
 }

})
