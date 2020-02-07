import React from 'react';
import { createAppContainer, createSwitchNavigator,  } from 'react-navigation';
import {FontAwesome, MaterialIcons, AntDesign} from '@expo/vector-icons'
import { createBottomTabNavigator,  } from 'react-navigation-tabs';
import { createStackNavigator, navigationOptions,  } from 'react-navigation-stack';

import Login from './modules/Login/containers/login';
import Register from './modules/Login/containers/register';
import Inicio from './modules/Home/containers/inicio';
import Header from './modules/sections/components/header';
import Agenda from './modules/Agenda/containers/agenda';
import Push from './modules/Push/containers/push';
import GeoMap from './modules/GeoMap/containers/geomap';
import Perfil from './modules/Perfil/containers/perfil';
import Loading from './modules/sections/containers/loading';

const LoginNavigator = createStackNavigator({
  Login,
  Register
},{defaultNavigationOptions : {header : ()=> <Header text="Registro"/>}});

const HomeNavigator = createStackNavigator({
  Inicio
},{defaultNavigationOptions : {header : ()=> <Header text="Inicio"/>}});
//Agenda
const AgendaNavigator = createStackNavigator({
  Agenda
},{defaultNavigationOptions : {header : ()=> <Header text="Agenda"/>}});
//Notificaciones Push
const PushNavigator = createStackNavigator({
  Push
},{defaultNavigationOptions : {header : ()=> <Header text="Push"/>}});
//Geolocalizacion
const GeoNavigator = createStackNavigator({
  GeoMap
},{defaultNavigationOptions : {header : ()=> <Header text="Ubicacion"/>}});
//Perfil
const PerfilNavigator = createStackNavigator({
  Perfil  
},{defaultNavigationOptions : {header : ()=> <Header text="Perfil"/>}});



//termina
 
const BottomNavigator = createBottomTabNavigator({
  Home:{
    screen : HomeNavigator,
    navigationOptions: {
      title : 'Inicio',
      tabBarIcon: ({tintColor}) =><FontAwesome name="home" color={tintColor} size={28}></FontAwesome>
    }
  },
  Agenda:{
    screen : AgendaNavigator,
    navigationOptions: {
      title : 'Agenda',
      tabBarIcon: ({tintColor}) =><MaterialIcons name="book" color={tintColor} size={28}></MaterialIcons>
    }
  },
  Push:{
    screen : PushNavigator,
    navigationOptions: {
      title : 'Push',
      tabBarIcon: ({tintColor}) =><AntDesign name="notification" color={tintColor} size={28}></AntDesign>
    }
  },
  GeoMap:{
    screen : GeoNavigator,
    navigationOptions: {
      title : 'Geo',
      tabBarIcon: ({tintColor}) =><MaterialIcons name="location-on" color={tintColor} size={28}></MaterialIcons>
    }
  },
  Perfil:{
    screen : PerfilNavigator,
    navigationOptions: {
      title : 'Perfil',
      tabBarIcon: ({tintColor}) =><MaterialIcons name="person-pin" color={tintColor} size={28}></MaterialIcons>
    }
  },
},{
  tabBarOptions:{
    activeTintColor : 'black',
    activeBackgroundColor: 'white',
    inactiveTintColor: 'gray',
    inactiveBackgroundColor: 'white'
  }
})




const SwitchNavigator = createSwitchNavigator(
  {
  UserLogin : LoginNavigator,
  Loading,
  Home: BottomNavigator
  },
  {
    initialRouteName: 'UserLogin'
  }
)

export default createAppContainer(SwitchNavigator);