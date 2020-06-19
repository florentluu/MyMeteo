import React from 'react'
import axios from 'axios'
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Linking} from 'react-native'
import Constants from 'expo-constants';


// const Drinks = [
//      { 
//        placeName:'DARWIN', 
//        description: 'Lorsque les jours se rallongent, quel bonheur de pouvoir sortir dans un endroit atypique! Chaque mercredi, Darwin organise « les heures heureuses » : dj set, bières et snacks.',
//        website: 
//        <Text 
//         onPress={() => Linking.openURL('https://darwin.camp/')}>
//         Site Internet
//         </Text>
//     },
//     {
//         placeName:`MAMA SHELTER` ,
//         description:`Un rooftop avec une vue imprenable sur Bordeaux, de la bonne musique, des bons concktails et une décoration made in Starck.`,
//         website: 
//         <Text
//         onPress={() => Linking.openURL('https://www.mamashelter.com/fr/bordeaux')}>
//         Site Internet
//         </Text>
//     },
//     {
//         placeName: `LA GUINGUETTE CHEZ ALRIQ` ,
//         description: `Sympathique ginguette sur les bords de la Garenne, en plein air, où l'on vient autant pour danser que partager un verre entre amis, où satisfaire une petite faim estivale.`,
//         website: 
//         <Text
//         onPress={() => Linking.openURL('https://www.laguinguettechezalriq.com/')}>
//         Site Internet
//         </Text>
//     }
// Places : {
//     BordeauxLac: `On part rapidement au lac où de nombreuses activités nautiques vous attendent : voile, canoë Kayak, stand-up paddle, …` ,
//     Lesquais: `Une balade en long de garonne où vous pouvez profiter d'une large pelouse pour faire un pique-nique et/ou une longue sieste sous les arbres.`,
//     LaCitéduVin: `Un endroit spécialement dédié à la fierté bordelaise : LE VIN. Musée, dégustation, restauration, ... tout y est pour passer un beau moment gustatif et culturel`
// }
// ]

// const Activities = [
//     {
//         placeName: `BORDEAUX-LAC`,
//         description: `On part rapidement au lac où de nombreuses activités nautiques vous attendent : voile, canoë Kayak, stand-up paddle, …`,
//         localisation: <Text
//         onPress={() => Linking.openURL('https://www.google.com/maps/place/Plage+du+Lac/@44.8781683,-0.5788743,15z/data=!4m5!3m4!1s0x0:0x320a5e5582d85a63!8m2!3d44.8781683!4d-0.5788743')}>
//         Localisation
//         </Text>
//     },
//     {
//         placeName: `LES QUAIS`,
//         description: `Une balade en long de garonne où vous pouvez profiter d'une large pelouse pour faire un pique-nique et/ou une longue sieste sous les arbres.`,
//         localisation: <Text
//         onPress={() => Linking.openURL('https://www.google.com/maps/place/Les+Quais+De+Bordeaux/@44.84224,-0.5734838,17z/data=!3m1!4b1!4m5!3m4!1s0xd552878dc2368f9:0xc91c64e91e3a6409!8m2!3d44.8422362!4d-0.5712951')}>
//         Localisation
//         </Text>
//     },
//     {
//         placeName: `LA CITÉ DU VIN`,
//         description: `Un endroit spécialement dédié à la fierté bordelaise : LE VIN. Musée, dégustation, restauration, ... tout y est pour passer un beau moment gustatif et culturel.`,
//         localisation: <Text
//         onPress={() => Linking.openURL('https://www.google.com/maps/place/Cit%C3%A9+du+Vin/@44.8622542,-0.5499052,15z/data=!4m5!3m4!1s0x0:0x41574cdcced6d11a!8m2!3d44.8622542!4d-0.5499052')}>
//         Localisation
//         </Text>
//     }
// ]

export default class Activity extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            city: this.props.route.params.city,
            data: [],
            dataPlace: [],
            reportIcon: this.props.route.params.reportIcon
            
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
        this.setState({data});
        console.log('city',this.state.data[0].city)
      })
      axios.get(`https://whaza.herokuapp.com/placeActivity`)
    .then(response => {
        const dataPlace = response.data
        this.setState({dataPlace});
      })
}

// cityFilter(){
//     if (this.state.city === )
// }

render () { console.log(this.state.reportIcon)
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

{/* // DRINKS // */}

                {/* <Image
                    style={styles.logo}
                    source={require('./icons/logoDrinkWhite.png')}
                />
                {Drinks.map(glass => ( 
                <View key= {glass}>
                    <Text style= {{fontSize: 20,color: "tomato", paddingVertical: 20, textAlign: 'center'}}>{glass.placeName}</Text>
                    <Text style={{color: 'white', textAlign: 'center', paddingHorizontal: 20, paddingBottom: 10}}>{glass.description}</Text> 
                    <Text style={{color: 'orange', textAlign: 'center'}}>{glass.website}</Text>
                </View>
                ))} */}

{/* // ACTIVITIES // */}

                {/* <Image
                    style={styles.logo}
                    source={require('./icons/logoActivityWhite.png')}
                />
                {Activities.map(activity => ( 
                <View>
                    <Text style= {{fontSize: 20,color: "tomato", paddingVertical: 20, textAlign: 'center'}}>{activity.placeName}</Text>
                    <Text style={{color: 'white', textAlign: 'center', paddingHorizontal: 20, paddingBottom: 10}}>{activity.description}</Text>
                    <Text style={{color: 'orange', textAlign: 'center'}}>{activity.localisation}</Text> 
                </View>         
                ))} */}
                
{/* ----- TEST ------ */}
                <Image
                    style={styles.logo}
                    source={require('./icons/logoDrinkWhite.png')}
                />
                
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

