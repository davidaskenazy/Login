import React, {Component} from 'react'
import {View,Text, StyleSheet, Platform} from 'react-native'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
/* LOCALIZACION EN SEGUNDO PLANO 
const LOCATION_TASK_NAME = 'background-location-task';
*/
class Geomap extends Component{
    state = {
        location: null,
        errorMessage: null,
      };
    
      componentDidMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
        } else {
          this._getLocationAsync();
        }
      }
    
      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
        let address = await Location.reverseGeocodeAsync(location.coords)
        console.log(address)
      }; 
/* LOCALIZACION EN SEGUNDO PLANO
      onPress = async () => {
        const { status } = await Location.requestPermissionsAsync();
        if (status === 'granted') {
          await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.Balanced,
          });
        }
      };
   */ 

    render(){

        let {location} = this.state
        return(
            location != null
            ?
            <MapView 
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0,
              longitudeDelta: 0,
            }}
            style={{flex:1}}
          />
            :
            <Text>
                Cargando mapa...
            </Text>
            /* LOCALIZACION EN SEGUNDO PLANO 
                <TouchableOpacity onPress={()=>this.onPress}>
          
                <Text> Geomap </Text>
                </TouchableOpacity>
            */
        );
    }
}
/* LOCALIZACION EN SEGUNDO PLANO 
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
        console.log(locations)
      // do something with the locations captured in the background
    }
  });
*/
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Geomap;