import React from 'react';
import { View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import style from '../Style'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

// export default class About extends React.Component {

//     search() {
//         console.log('search',this.props.navigation.navigate("Search"))
//     }

//     render() {
//         return(
//             <View style={{ 
//                 textAlign: 'center', 
//                 paddingBottom: 30, 
//                 paddingTop: 30,
//                 backgroundColor: '#333341',
//                 flex: 1,
//                 paddingHorizontal: 20
//             }}>
                
//                 <Text style={{paddingTop: 30, paddingBottom: 30, textAlign: 'center', fontSize: 20, color: 'tomato'}}>A PROPOS DE WAZAAA </Text>
//                 <Text style={{color: 'white', fontSize: 15, paddingBottom: 30, textAlign: 'justify'}}>
//                 Cette application sous le doux nom de WAZAAA (ie: "What's up?") pourra enfin guider toutes votre journée selon la météo.
//                 Que ce soit en weekend, en séminaire, en road trip ou peut être même en fugue. WAZAAA vous a sélectionné une multitude de lieux atypiques et des Must See dans la ville que vous allez découvrir.
//                 Profitez de cette aplication et n'hésitez pas à me faire part de vos endroits favoris via ce mail : contact@wazaaa.com

//                 </Text>
//                 <Button color={style.button.color} onPress={() => this.search()} title="Rechercher une ville"/>
            
//                 <Image
//                     style={{width: 200, height: 200, alignSelf: 'center', marginTop: 30}}
//                     source={require('./icons/w.gif')}
//                 /> 
//             </View>
//         )
//     }
// }
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
          }
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
        
      }
    
 

      render() { console.log('position', this.state.region)
        return (
          <MapView
            provider={ PROVIDER_GOOGLE }
            style={ styles.container }
            showsUserLocation={ true }
            region={ this.state.region }
          >
            <MapView.Marker
              coordinate={ this.state.region }
            />
          </MapView>
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
