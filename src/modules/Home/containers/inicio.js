/*PARA EVITAR CRASH*/

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../sections/styles/style'

class Inicio extends Component{
    render(){
        return(
            <View style={Styles.content}>
                <Text>Inicio </Text>
            </View>
        );
    }
}
export default Inicio;
