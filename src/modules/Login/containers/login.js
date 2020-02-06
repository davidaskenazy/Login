/*ESTE SIII!!!*/ 
import { Container, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";
import { KeyboardAvoidingView, StatusBar} from 'react-native';
import React, { Component } from 'react';
import { setLightEstimationEnabled } from "expo/build/AR";
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from '../styles/styleLogin'
import Header from '../../sections/components/header'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Login extends Component {

  static navigationOptions=({navigation}) =>{
    return{header:()=><Header text ="Login"/>}
  }

  navegar = (param) => this.props.navigation.navigate(param)

  render() {
    return (
      <Container>
        
        <Content padder contentContainerStyle={styles.content}>
          <KeyboardAvoidingView behavior="padding" enabled>
          <StatusBar
             barStyle="dark-content"
             
             ></StatusBar>

            
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Inicio de sesion</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.body}>
              <Item inlineLabel>
                <FontAwesome active name='users' size={20}></FontAwesome>
              <Input placeholder='Nombre de usuario'/>
            </Item>
            <Item inlineLabel last>
            <Ionicons active name='md-lock' size={20}></Ionicons>
              <Input placeholder='Contraseña'/>
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary onPress={()=>this.navegar('Register')}>
              <Text> Registro </Text>
              </Button>
              <Button success style={styles.boton} onPress={()=>this.navegar('Home')}>
              <Text> Entrar </Text>
              </Button>
            </CardItem>
          </Card>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

