import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


class ListView extends Component {

	render() {
		return (
			<FlatList
	          data={this.props.listData}
	          extraData={this.props}
            renderItem={({item}) => 
            (item.isAdded) ?
            <View style={style.row}>
            	<Text style={style.item}>{item.key} </Text>
            	<Text style={style.value}>{item.value}</Text>
            </View> : null
           }
           />
		);
	}
}

const style = StyleSheet.create({
	row: {
		borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
	},
	item: {
		color: 'grey',
		fontSize: 20,
		fontFamily: 'Montserrat-SemiBold'
	},
	value: {
		color: 'grey',
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'Montserrat-Bold'
	}
});

export { ListView };
