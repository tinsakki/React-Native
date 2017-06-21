import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,FlatList,StatusBar,
  View,ListView,Dimensions,Image,TouchableHighlight,TextInput
} from 'react-native';
var {height, width} = Dimensions.get('window');
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
/*import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';*/
var radio_props = [
  {label: 'Male', value: 0 },
  {label: 'Female', value: 1 }
];
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render(){

      return( 
        <View style={{flex:1}}> 
          <StatusBar hidden={true}/>
         
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',borderColor:'black',borderBottomWidth:0.8}}>
            <Icon2 name="ios-arrow-back" size={30} color="black" style={{padding:15,marginLeft:5}}/>
            <Text style={{color:'black',fontSize:21,fontWeight:'bold',padding:15,}}>Bewakoof</Text>
          </View>




          <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',marginLeft:15,marginRight:15}}>

            <TextInput underlineColorAndroid="transparent" placeholder="First Name" style={{padding:10,borderRadius:5,borderWidth:1,width:width/2.5}}>
              <Text></Text>
            </TextInput>
            <TextInput underlineColorAndroid="transparent" placeholder="Last Name" style={{padding:10,borderRadius:5,borderWidth:2,width:width/2.5}}>
              <Text></Text>
            </TextInput>
          </View>



           <View style={{marginTop:20,flexDirection:'row',marginLeft:15,marginRight:15}}>
            <TextInput underlineColorAndroid="transparent" placeholder="+91" style={{padding:15,borderRadius:5,borderWidth:1,width:50,fontWeight:'bold'}}>
              <Text></Text>
            </TextInput>
            <TextInput underlineColorAndroid="transparent" placeholder="Mobile Number" style={{padding:15,borderRadius:5,borderWidth:1,alignSelf:'stretch'}}>
              <Text></Text>
            </TextInput>
          </View>

          <View style={{marginTop:20,marginLeft:15,marginRight:15}}>
            <TextInput underlineColorAndroid="transparent" placeholder="Email ID" style={{alignSelf:'stretch',padding:15,borderRadius:5,borderWidth:1,fontWeight:'bold'}}>
            </TextInput>
            
          </View>

          <View style={{marginTop:20,marginLeft:15,marginRight:15}}>
            <TextInput underlineColorAndroid="transparent" placeholder="Password" style={{alignSelf:'stretch',padding:15,borderRadius:5,borderWidth:1}}>
              <Text></Text>
            </TextInput>
          </View>


          <RadioForm style={{marginTop:15,justifyContent:'space-around',flexDirection:'row'}}
          radio_props={radio_props}
          initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
        />



          <View style={{alignItems:'flex-end',marginTop:15,marginLeft:15,marginRight:15}}>
            <Text>Already a member ? LOG IN</Text>
          </View>



          <View style={{justifyContent:'center',alignItems:'center',marginTop:20,marginLeft:15,marginRight:15}}>
            <TouchableHighlight style={{backgroundColor:'#8EE5EE',alignSelf:'stretch'}}>
              <Text style={{textAlign:'center',padding:15}}>SIGN UP</Text>
            </TouchableHighlight>
          </View>
  
        </View>            
      
  );
}
}

const styles = StyleSheet.create({
  
});
module.exports=SignUp;