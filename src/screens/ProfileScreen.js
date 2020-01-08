import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { Header } from '../common/header';

class ProfileScreen extends Component {

	render() {
		return (
			<View>
				<Header headerText={'Me'} openDrawer={() => this.props.navigation.toggleDrawer()} />
				<Text>Hi, This is Me.</Text>
				<Text>{this.props.main.current.month}</Text>
				<Button title="Learn More" onPress={() => this.props.navigation.navigate('Dashboard')} />
			</View>
		);
	}	
}

const mapStateToProps = (state) => {
  const { main } = state;
  return { main };
};

export default connect(mapStateToProps)(ProfileScreen);
