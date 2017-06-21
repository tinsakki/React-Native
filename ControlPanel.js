
import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,PropTypes,ScrollView,
  Text,TouchableOpacity,
  View,ListView,Dimensions,Image,TouchableHighlight
} from 'react-native';

class ControlPanel extends Component {

  render() {
    return (
    <ScrollView style={styles.container}>
        <Text style={styles.controlText}>Control Panel</Text>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
 
  }
});
module.exports=ControlPanel;