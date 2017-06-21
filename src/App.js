import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,FlatList,
  View,ListView,Image,Alert,TouchableHighlight,Dimensions
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers/index.js';

class App extends Component {
   render(){
    return (
	   <Provider store={createStore}>
	    <View/>
	  </Provider>
  

  );
}
}

const styles = StyleSheet.create({
 
});
module.exports=App;