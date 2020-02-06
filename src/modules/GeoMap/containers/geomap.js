import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Styles from '../../sections/styles/style'

class Geomap extends Component{
    render(){
        return(
            <View style={Styles.content}>
                <Text> Geomap </Text>
            </View>
        );
    }
}

export default Geomap;