import React from 'react'
import axios from 'axios'
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Linking, ActivityIndicator} from 'react-native'
import Constants from 'expo-constants';

export default class Activity extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            city: this.props.route.params.city,
            data: [],
            dataPlace: [],
            reportIcon: this.props.route.params.reportIcon,
            isLoading: true
        }
    }

componentDidUpdate() {
    if(this.state.reportIcon === "Clouds"){
        this.setState({reportIcon: "Clear"})
    }
}

componentDidMount() {
    axios.get(`https://whaza.herokuapp.com/activity`)
    .then(response => {
        const data = response.data
        this.setState({data, isLoading: false});
        console.log('city',this.state.data[0].city)
      })
      axios.get(`https://whaza.herokuapp.com/placeActivity`)
    .then(response => {
        const dataPlace = response.data
        this.setState({dataPlace, isLoading: false});
      })
}

render () { console.log(this.state.reportIcon, this.state.dataPlace)
    const cityData= this.state.data
    const cityPlace= this.state.dataPlace
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            
            <ScrollView>
                <Text style={{
                    fontSize: 40, 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    paddingBottom: 30, 
                    paddingTop: 30,
                    color: 'tomato',
                    backgroundColor: '#333341'
                }}>
                    {this.state.city}
                </Text>

                <Image
                    style={styles.logo}
                    source={require('./icons/logoDrinkWhite.png')}
                />
                 {/* LOADING */}
                {this.state.isLoading &&(
                <ActivityIndicator size="large" color="tomato"  style={{flex: 1, justifyContent: "center", paddingTop: "30%"}}/>)}
                {/* ------- */}

                {cityData.map(place =>  place.city===this.state.city && place.weather==this.state.reportIcon && (
                    // FILTER WITH TERNAIRE CONDITION 
                    
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20,color: "tomato", paddingVertical: 20, textAlign: 'center'}}>{place.drinks}</Text>
                    <Text style={{color: 'white', textAlign: 'center', paddingHorizontal: 20, paddingBottom: 10}}>{place.descriptionDrinks}</Text>
                    <Text style={{color: 'orange', textAlign: 'center'}}
                        onPress={() => Linking.openURL(place.link)}>
                        Visitez le site
                    </Text> 
                </View> 
                ))
                } 

                <Image
                    style={styles.logo}
                    source={require('./icons/logoActivityWhite.png')}
                />
                {cityPlace.map(act =>  act.city===this.state.city && act.weather== this.state.reportIcon  &&(
                <View style={{flex: 1}}>
                <Text style={{fontSize: 20,color: "tomato", paddingVertical: 20, textAlign: 'center'}}>{act.name}</Text>
                <Text style={{color: 'white', textAlign: 'center', paddingHorizontal: 20, paddingBottom: 10}}>{act.description}</Text>
                <Text style={{color: 'orange', textAlign: 'center'}}
                    onPress={() => Linking.openURL(act.localisation)}>
                    Localisation
                </Text>
                </View>
                ))} 
            </ScrollView>
        </SafeAreaView>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    logo: {
        width: 70,
        height: 90,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    }
  });

