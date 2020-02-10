import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input,Body } from 'native-base';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView} from 'react-native';
import styles from '../styles/styleLogin'

export default class Register extends Component {

    volver=() => this.props.navigation.goBack()

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.content}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Card>
                        <CardItem header bordered>
                    <Text style={styles.textCenter}>Registro de usuario</Text>
                        </CardItem>
                        <CardItem >
                            <Body style={styles.body}>
                                <Item inlineLabel>
                                    <MaterialIcons active name='email' size={20}/>
                                    <Input placeholder='Correo electronico' keyboardType="email-address"/>
                                </Item>
                                <Item inlineLabel>
                                    <FontAwesome active name='user' size={20}/>
                                    <Input placeholder='Nombre de usuario' />
                                </Item>
                                <Item inlineLabel last>
                                    <FontAwesome active name='lock' size={20}/>
                                    <Input placeholder='Contraseña' secureTextEntry={true}/>
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button danger bordered onPress={this.volver}>
                                <Text>Volver</Text>
                            </Button>
                        
                            <Button primary success bordered style={styles.boton}>
                                <Text> Guardar </Text>
                            </Button>
                        </CardItem>
                    </Card>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        );
    }
}


