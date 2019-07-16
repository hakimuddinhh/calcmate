import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Text, View, Modal, Alert, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


class ContributionComponents extends Component {

	state = {
		tag: {

		}
	}

	addTag(name) {
		debugger;
	}

	render() {
		return (
			      <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          contentContainerStyle={{}}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          	<View style={{marginTop: 22, flex:1, flexDirection: 'column'}}>
              <Text>Hello World!</Text>

              <View>
              	<Text>Frequently Used Components</Text>
              	<View>
              		<FlatList
	              		numColumns={3}
              		  contentContainerStyle={Styles.tagsContainer}	
			          data={this.props.components.current}
			          extraData={this.props}
		            renderItem={({item}) => <Text ref={"abc"} onPress={() => this.addTag} style={Styles.tags}><Ionicons name={'md-add'} size={25} color={'#ffffff'} /> {item.key}</Text>}
		           />
              	</View>
              </View>
          </View>
              <Button style={Styles.closeBtn} title={'Close'} onPress={() => this.props.toggleModalVisible(true)} />
        </Modal>
			
		);
	}	
}

const Styles = StyleSheet.create({
	tags: {
		backgroundColor: '#f7941d',
		color: '#ffffff',
		paddingTop: 3,
		paddingRight: 8,
		paddingBottom: 3,
		paddingLeft: 8,
		borderRadius: 16,
		marginTop: 8,
		marginRight: 8,
		fontSize: 20,
		fontFamily: 'Montserrat-Bold'
	},
	tagAdded: {
		backgroundColor: '#00b3d3'
	},
	tagsContainer: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		flexWrap: 'wrap'
	},
	closeBtn: {
		position: 'absolute',
		bottom: 0
	}
});


const mapStateToProps = (state) => {
  const { components } = state;
  return { components };
};


export default connect(mapStateToProps)(ContributionComponents);
