/*PARA EVITAR CRASH*/
import Inicio2 from '../containers/inicio2'
import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import Styles from '../../sections/styles/style'
import createAppContainer from 'react-navigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
class Inicio extends Component{

    constructor(props){
      super(props);
      this.state={
        username:'',
        perm: false
      }
    }
    //antes que el dom se renderize
    async componentDidMount(){
      
      let userLogin = await AsyncStorage.getItem('userLogin')
      userLogin = JSON.parse(userLogin)
      this.setState({username: userLogin.user, perm: userLogin.perm})
    }

    render(){
        return(
            <View style={Styles.content}>
              <Text>Inicio {this.state.username}</Text>
            </View>
        );
    }
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default Inicio

/*
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      
    
    </Drawer.Navigator>
  );

*/ 