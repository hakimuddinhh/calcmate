import React, {Component} from 'react';
import { Text, TouchableOpacity   } from 'react-native';


class Button extends Component {


	render() {
		return (
			<TouchableOpacity onPress={this.props.onclicky} style={Styles.button}>
			{this.props.children}
			</TouchableOpacity >
		)
	}



}
const Styles = {
	button: {
		flex: 1,
		backgroundColor: '#f7941d',
		color: 'white'
	}
}

export {Button};