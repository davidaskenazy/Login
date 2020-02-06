import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
     
        paddingTop: 40,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    content:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text : {
        color: 'white',
        textAlign: 'center'
    }
})

export default styles;