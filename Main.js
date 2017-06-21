import React, { Component } from 'react';
import {
  StyleSheet,
  Alert, PropTypes,ScrollView,
  Text,TouchableOpacity,
  View,ListView,Dimensions,Image,TouchableHighlight
} from 'react-native';
import Icon3 from 'react-native-vector-icons/EvilIcons';

class Main extends Component {


  render() {
    return (
      <View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7699dd',
    padding: 20,
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
});
module.exports=Main;

















<Drawer ref={(ref) => this._drawer = ref}
            type="displace"
            tapToClose={true}
            content={<ControlPanel closeDrawer={this.closeDrawer} />}
            onOpen={() => {this.setState({drawerOpen: true})}}
            onClose={() => {this.setState({drawerOpen: false})}}
            captureGestures={true}
            tapToClose={true}
          >




          <Drawer
        ref={(ref) => this._drawer = ref}
       type="displace"
      
        tapToClose={true}
        openDrawerOffset={400}
        content={
          <ControlPanel closeDrawer={this.closeDrawer} />
        }
        
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
         onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={true}
        tweenDuration={100}
        panThreshold={0.01}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => 100}
        panOpenMask={30}
        negotiatePan
        >
        <TouchableOpacity onPress={this.openDrawer.bind(this)}>
          <Icon3 name="navicon" size={30}/>
        </TouchableOpacity>
      </Drawer>













     












            




{/*   <Carousel width={width} indicatorAtBottom={true} animate={true} delay={3000}
      indicatorColor="orange" indicatorOffset={height-480} indicatorSpace={15}>
        <View style={styles.container}>
          <Image style={styles.img}source={require('./a.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./e.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./c.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./d.jpg')}/>
        </View>
      </Carousel>
     <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Text style={{fontWeight:'bold'}}>A Bewakoof Follows His Heart</Text>
*/}




  <SideMenu
        menu={ControlPanel}
        edgeHitWidth={40}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>    
          <View style={styles.container}>
          <TouchableOpacity style={{}} onPress={this.toggle.bind(this)}>
                <Icon3 name="navicon" size={30} color="black"/>
              </TouchableOpacity>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text>
        </View>
        <Carousel width={width} indicatorAtBottom={true} animate={true} delay={3000}
      indicatorColor="orange" indicatorOffset={height-480} indicatorSpace={15}>
        <View style={styles.container}>
          <Image style={styles.img}source={require('./a.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./e.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./c.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./d.jpg')}/>
        </View>
      </Carousel>
         
      </SideMenu> 
