import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContributionComponent, changeComponentStatus } from './Actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';

class AddComponent extends Component {

  state = {
      tags: {},
      demo: false
    }

  addTag(tagName) {
    this.props.changeComponentStatus(tagName);
  }

  addTagToStore(tagName) {
    // debugger;
    this.props.addContributionComponent(tagName);
  }

  render() {
    return (
                  <View style={{ marginTop: 22, flex:1, flexDirection: 'column'}}>

              <View style={{paddingLeft: 10, paddingRight: 10}}>
                <Text style={Styles.h2}>Frequently Used Components</Text>
                <View>
                  <FlatList
                    numColumns={2}
                    contentContainerStyle={Styles.tagsContainer}  
                data={this.props.components.current}
                extraData={[this.props, this.state]}
                renderItem={({item}) => 
          
                <TouchableOpacity 
                onPress={()=>this.addTag(item.key)}
                style={[Styles.tags, (item.isAdded) ? Styles.tagOrange : Styles.tagBlue]}>
                  <Ionicons name={(item.isAdded) ? 'md-checkmark-circle' : 'md-add-circle-outline'} size={25} color={'#ffffff'} /> 
            <Text style={Styles.tagText}
            > {item.key}</Text>
          </TouchableOpacity>
                              }
               />
               <TextInput
              placeholder={'Add New Tag'}
              maxLength={10}
              style={Styles.addTagInput}
              onSubmitEditing={(event) => this.addTagToStore( event.nativeEvent.text)}
                />
                </View>
              </View>
        <TouchableOpacity style={Styles.next} onPress={() => this.props.navigation.navigate('setComponentValue')}>
          <Text style={Styles.nextText}>Next</Text>
          <Ionicons style={Styles.arrow} name={'ios-arrow-forward'} size={25} color={'#ffffff'} /> 
        </TouchableOpacity>
          </View>
      
    );
  } 
}

const Styles = StyleSheet.create({
    h2: {
    fontSize: 28,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center'
  },
  tags: {
    color: '#ffffff',
    paddingTop: 3,
    paddingRight: 8,
    paddingBottom: 3,
    paddingLeft: 8,
    borderRadius: 16,
    marginTop: 8,
    marginRight: 8,
    flexDirection: 'row'
  },
  tagText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff'
  },
  tagAdded: {
    backgroundColor: '#00b3d3'
  },
  addTagInput: {
    backgroundColor: '#ebebeb',
    width: '100%',
    fontSize: 26,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  closeBtn: {
    position: 'absolute',
    bottom: 0
  },

  tagOrange: {
    backgroundColor: '#f7941d'
  },

  tagBlue: {
    backgroundColor: '#00b3d3'
  },
  next: {
    backgroundColor: '#f36363',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    height: 45
  },
  nextText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 4,
    color: 'white'
  },
  arrow: {
    position: 'absolute',
    right: 10,
    bottom: 9
  },
});

const mapStateToProps = (state) => {
  const { components } = state;
  return { components };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addContributionComponent,
    changeComponentStatus
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
