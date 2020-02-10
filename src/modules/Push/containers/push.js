import React, {Component} from 'react'
import {View,Text, StyleSheet} from 'react-native'
import {Notifications} from 'expo'
import * as Permissions from 'expo-permissions'

class Push extends Component{
    
    async componentDidMount(){
        const {status: existingStatus} = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;

        if(existingStatus !== 'granted'){
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if(finalStatus !== 'granted'){
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token)
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text> Push </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Push;