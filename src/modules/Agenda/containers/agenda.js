import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Styles from '../../sections/styles/style'

class Agenda extends Component{
    render(){
        return(
            <View style={Styles.content}>
                <Text> Agenda </Text>
            </View>
        );
    }
}

export default Agenda;