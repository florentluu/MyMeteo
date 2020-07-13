import React from 'react';
import axios from 'axios'
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import {Marker} from 'react-native-maps'
import FadeInView from './animations/FadeInView'

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          markCoords : [],
          markCoordsAct : [],
          isLoading: true
        };
      }
      
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }
            });
          },
        (error) => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );   
        axios.get(`https://whaza.herokuapp.com/placeActivity`)
        .then(response => {
        const markCoords = response.data
        this.setState({markCoords, isLoading: false});
      }) 
      axios.get(`https://whaza.herokuapp.com/activity`)
      .then(response => {
      const markCoordsAct = response.data
      this.setState({markCoordsAct, isLoading: false});
    }) 
      }
    
      render() { console.log('position', this.state.region, "mark", this.state.markCoords)
        return (
          <FadeInView style={{flex: 1}}>
          <MapView
            provider={ PROVIDER_GOOGLE }
            style={ styles.container }
            showsUserLocation={ true }
            region={ this.state.region }
          >
            <MapView.Marker
              coordinate={ this.state.region }
            />
            {this.state.markCoords.map(place => (
            <Marker
              coordinate={{
                latitude: place.latMarker,
                longitude: place.lngMarker}}
                title={place.name}
                style={{width: 200}}
            >
              <Image source={require('./icons/logoSplash3.png')} style={{ height: 50, width: 50 }} />
            </Marker>
            ))}

            {this.state.markCoordsAct.map(place => (
            <Marker
              coordinate={{
                latitude: place.latMarker,
                longitude: place.lngMarker}}
                title={place.drinks}
                style={{width: 200}}
            >
              <Image source={require('./icons/logoSplash4.png')} style={{ height: 50, width: 50 }} />
            </Marker>
            
            ))}
            <View style={{paddingLeft: "5%", paddingTop: "10%"}}>
            
              <Text style={{textDecorationLine: "underline"}}>
                Drinks 
              </Text>
              <Image source={require('./icons/logoSplash3.png')} style={{ height: 50, width: 50 }} />
              <Text style={{textDecorationLine: "underline"}}>
                Activities
              </Text>
              <Image source={require('./icons/logoSplash4.png')} style={{ height: 50, width: 50 }} />

            </View>
          </MapView>
          </FadeInView>
        );
    }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  mapViewContainer: { flex: 1 },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16
  }
});