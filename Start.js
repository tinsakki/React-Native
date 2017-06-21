import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,FlatList,StatusBar,Animated,TouchableOpacity,
  View,ListView,Dimensions,Image,TouchableHighlight,TextInput,DrawerLayoutAndroid
} from 'react-native';
var {height, width} = Dimensions.get('window');
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';
/*import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';*/
var Carousel = require('react-native-carousel');
var ControlPanel=require('./ControlPanel.js');
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}



class Start extends Component {
   constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    drawerDisabled: false,

     };
  }
 closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };


  

  render() {
    return (
  
    <Drawer ref={(ref) => this._drawer = ref}
           type="overlay" tweenHandler={Drawer.tweenPresets.parallax}
          content={<ControlPanel/>}
          onOpen={() => {this.setState({drawerOpen: true})}}
          onClose={() => {this.setState({drawerOpen: false})}}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})}
    >
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
             <TouchableOpacity style={{}} onPress={this.openDrawer.bind(this)}>
        <Icon name="bars" size={25} color="black"/>
      </TouchableOpacity>
      <Text style={{right:17,fontWeight:'bold',fontSize:22,color:'black',paddingBottom:18}}>Bewakoof</Text>
     
      
      
    
        <Icon3 name="bell" size={22} color="black"/>
        <Icon3 name="search" size={22} color="black"/>
        <Icon4 name="bag" size={18} color="black"/>
    
 </View>
     <Carousel width={width} indicatorAtBottom={true} animate={true} delay={3000}
      indicatorColor="orange" indicatorOffset={height-480} indicatorSpace={15}>
        <View style={styles.container}>
          <Image style={styles.img}source={require('./i.jpg')} resizeMode="stretch"/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./f.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./g.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./u.jpg')}/>
        </View>
      </Carousel>
  </Drawer>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    height:400,width:width
  },
  container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'stretch',
        justifyContent:'center',
        alignItems:'center'
    },
});
module.exports=Start;