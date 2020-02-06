import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Styles from '../../sections/styles/style'

class Perfil extends Component{
    render(){
        return(
            <View style={Styles.content}>
                <Text> Perfil </Text>
            </View>
        );
    }
}

export default Perfil;