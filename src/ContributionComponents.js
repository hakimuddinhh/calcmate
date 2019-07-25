import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Text,
  View,
  Modal,
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class ContributionComponents extends Component {
  state = {
    tags: {},
    demo: false
  };

  addTag(tagName) {
    const newValue = this.state.tags;

    // toggle the active and inactive states if the pressed tag name is already clicked previously
    if (this.state.tags[tagName]) {
      newValue[tagName] = {
        name: tagName,
        isActive: !this.state.tags[tagName].isActive
      };
    }
    // if the pressed tag name is clicked first time then set the isActive to true
    else {
      newValue[tagName] = { name: tagName, isActive: true };
    }
    // set the updated value
    this.setState({ tags: newValue });
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        contentContainerStyle={{}}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{ marginTop: 22, flex: 1, flexDirection: "column" }}>
          <View>
            <Text>Frequently Used Components</Text>
            <View>
              <FlatList
                numColumns={3}
                contentContainerStyle={Styles.tagsContainer}
                data={this.props.components.current}
                extraData={[this.props, this.state]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.addTag(item.key)}
                    style={
                      this.state.tags[item.key]?.isActive
                        ? Styles.tagOrange
                        : Styles.tagBlue
                    }
                  >
                    <Ionicons name={"md-add"} size={25} color={"#ffffff"} />
                    <Text>{item.key}</Text>
                  </TouchableOpacity>
                )}
              />
              <TextInput placeholder={"Add"} maxLength={10} />
            </View>
          </View>
        </View>
        <Button
          style={Styles.closeBtn}
          title={"Close"}
          onPress={() => this.props.toggleModalVisible(true)}
        />
      </Modal>
    );
  }
}

const Styles = StyleSheet.create({
  tags: {
    color: "#ffffff",
    paddingTop: 3,
    paddingRight: 8,
    paddingBottom: 3,
    paddingLeft: 8,
    borderRadius: 16,
    marginTop: 8,
    marginRight: 8,
    fontSize: 20,
    fontFamily: "Montserrat-Bold"
  },
  tagAdded: {
    backgroundColor: "#00b3d3"
  },
  tagsContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  closeBtn: {
    position: "absolute",
    bottom: 0
  },

  tagOrange: {
    backgroundColor: "#f7941d"
  },

  tagBlue: {
    backgroundColor: "#00b3d3"
  }
});

const mapStateToProps = state => {
  const { components } = state;
  return { components };
};

export default connect(mapStateToProps)(ContributionComponents);
