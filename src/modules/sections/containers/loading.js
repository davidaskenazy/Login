import React, {Component} from 'react'
import {View, AsyncStorage} from 'react-native'
import {Spinner} from 'native-base'
import styles from '../../sections/styles/style'

class Loading extends Component{
    
    async componentDidMount(){
        let validationLogin = await AsyncStorage.getItem('userLogin')
        if(validationLogin){
            validationLogin = JSON.parse(validationLogin)
            if(validationLogin.perm){
                this.props.navigation.navigate('Home')
            }else{
                this.props.navigation.navigate('UserLogin')
            }
        }else{
            this.props.navigation.navigate('UserLogin')
        }
    }
    
    render(){
        return(
            <View style={styles.content}>
                <Spinner color="red" style={{width: 200, height:150}}/>

            </View>
        )
    }
}
export default Loading;