import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,FlatList,Alert,
  View,ListView,Dimensions,Image,TouchableHighlight
} from 'react-native';
var {height, width} = Dimensions.get('window');
class FirstPage extends Component {
  
    render(){

      return(

     
      <Image source={require('./c.jpg')} style={{flex:1,height:null,width:null,resizeMode:'stretch'}}>
        <View>
          <Text style={{fontWeight:'bold',fontSize:32,color:'white',marginLeft:20,marginTop:40}}>
            Bewakoof
        </Text>
        </View>

        <View style={{flex:1,alignItems:'flex-end',flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableHighlight style={{backgroundColor:'rgba(0,0,0,0.5)',width:width/2-2}} >
            <Text style={{color:'white',textAlign:'center',padding:21,fontWeight:'bold'}}>LOG IN</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{backgroundColor:'rgba(0,0,0,0.5)',width:width/2-2}} >
            <Text style={{color:'white',textAlign:'center',padding:21,fontWeight:'bold'}}>SIGN UP</Text>
          </TouchableHighlight>
        </View>
        <View style={{justifyContent:'flex-end',alignItems:'flex-start',width:width,marginTop:2}}>
          <TouchableHighlight style={{backgroundColor:'rgba(0,0,0,0.5)',borderRadius:2,alignSelf:'stretch'}} >
            <Text style={{color:'white',textAlign:'center',padding:21,fontWeight:'bold'}}>SKIP</Text>
          </TouchableHighlight>
        </View>
      </Image>
  
  
        
               
      
  );
}
}

const styles = StyleSheet.create({
  
});
module.exports=FirstPage;