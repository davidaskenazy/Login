import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Styles from '../../sections/styles/style'

class Push extends Component{
    render(){
        return(
            <View style={Styles.content}>
                <Text> Push </Text>
            </View>
        );
    }
}

export default Push;