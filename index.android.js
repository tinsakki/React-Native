import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,FlatList,
  View,ListView,Image,Alert,TouchableHighlight,Dimensions,TouchableOpacity
} from 'react-native';



/*var Start=require('./Start.js');*/
var Learn=require('./Learn.js');






/*
var SignUp=require('./SignUp.js');
var FirstPage=require('./FirstPage.js');*/
var {height, width} = Dimensions.get('window');

class first extends Component {
  render(){
    return (
    	<Learn/>
  
  

  );
}
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('first', () => first);
