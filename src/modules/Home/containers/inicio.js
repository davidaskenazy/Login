/*PARA EVITAR CRASH*/
import Inicio2 from '../containers/inicio2'
import React, {Component} from 'react';
import {View, Text, AsyncStorage, FlatList} from 'react-native';
import Styles from '../../sections/styles/style'
import createAppContainer from 'react-navigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import API  from '../../../utils/api'
import {Spinner} from 'native-base'
import InicioLayout from '../components/inicioLayout'

class Inicio extends Component{

    constructor(props){
      super(props);
      this.state={
        username:'',
        perm: false,
        data : '',
        loading: true
      }
    }
    //antes que el dom se renderize
    async componentDidMount(){
      let film = await API.getData()
      this.setState({data : film.data.movies, loading:false})      
      let userLogin = await AsyncStorage.getItem('userLogin')
      userLogin = JSON.parse(userLogin)
      this.setState({username: userLogin.user, perm: userLogin.perm})
    }

    render(){
        return(
          <FlatList
          data={this.state.data}
          ListFooterComponent={()=> this.state.loading ? <Spinner/> : null}
          keyExtractor={(x,i) => i.toString()}
          renderItem ={({item}) => <InicioLayout datos={item} />}
          >

          </FlatList>
        );
    }
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