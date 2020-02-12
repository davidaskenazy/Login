import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

let miToken = ""

class Push extends Component {

    async componentDidMount() {
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();
        miToken = token;
    }

    sendNotif() {
        fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Host': 'exp.host',
                'Accept': 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: miToken,
                title: "title",
                body: "mensaje"

            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>this.sendNotif()}> Push </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Push;