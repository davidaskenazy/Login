import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, navigationOptions } from 'react-navigation-stack';
import Login from './modules/Login/containers/login';
import Register from './modules/Login/containers/register';
import Inicio from './modules/Home/containers/inicio';
import Header from './modules/sections/components/header';
import Agenda from './modules/Agenda/containers/agenda';
import Push from './modules/Push/containers/push';
import GeoMap from './modules/GeoMap/containers/geomap';
import Perfil from './modules/Perfil/containers/perfil';

const LoginNavigator = createStackNavigator({
  Login,
  Register
},{defaultNavigationOptions : {header : ()=> <Header text="Registro"/>}});



//empieza
//Inicio
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
      title : 'Inicio'
    }
  },
  Agenda:{
    screen : AgendaNavigator,
    navigationOptions: {
      title : 'Agenda'
    }
  },
  Push:{
    screen : PushNavigator,
    navigationOptions: {
      title : 'Push'
    }
  },
  GeoMap:{
    screen : GeoNavigator,
    navigationOptions: {
      title : 'Geo'
    }
  },
  Perfil:{
    screen : PerfilNavigator,
    navigationOptions: {
      title : 'Perfil'
    }
  },
})


const SwitchNavigator = createSwitchNavigator(
  {
  UserLogin : LoginNavigator,
  Home: BottomNavigator
  },
  {
    initialRouteName: 'UserLogin'
  }
)

export default createAppContainer(SwitchNavigator);