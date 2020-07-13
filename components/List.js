import React from 'react'
import axios from 'axios'
import { Text, ActivityIndicator, View, StyleSheet, Image, FlatList } from 'react-native'
import { Button} from 'react-native-elements'
import moment from 'moment'
import 'moment/locale/fr'
import FadeInView from './animations/FadeInView'

moment.locale('fr')



export default class List extends React.Component {

    constructor (props){
        
        super(props)
        this.state = {
                city: this.props.route.params.city,
                reportTemp: [],
                reportDay: null,
                reportName: '',
                reportIcon: '',
                data: []
        }
        this.fetchWeather();
    }  

    fetchWeather= () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=5532df1797d063ad21fcfdf28745da7e&lang=fr`)
            .then((response) => {
                this.setState({
                    reportTemp: response.data.main, 
                    reportDay: response.data.dt,
                    reportName: response.data.name,
                    reportIcon: response.data.weather[0]
                    
                })
                //response.data.main fait reférence aux infos de l'appel API
                //response.data.weather[0] fait reférence à un array
                // console.log(this.state.reportIcon.main)
            })
    }

    day() {
        let day = moment(this.state.reportDay * 1000 ).format('ddd')
        return (
            <Text style={[style.tomato, style.bold]}> {day.toUpperCase() }</Text>
        )
    }

    date() {
        let day = moment(this.state.reportDay * 1000 ).format('DD/MM')
        return (
            <Text style={style.tomato}> {day}</Text>
        )
    }

    icon() {
        const type = this.state.reportIcon.main
        let image = {image}
        switch (type) {
            case 'Clouds':
                image = require('./icons/cloudy.png')
                break;
            case 'Rain':
                image = require('./icons/rain.png')
                break;
            default:
                image = require('./icons/sun.png')
        }
        return <Image source= {image}  />
        // return <Text>{type}</Text>
    }

    //QUOI FAIRE //

    toDo() {
        this.props.navigation.navigate("WHAZA", {city: this.state.city}),
        this.props.navigation.navigate("WHAZA",{reportIcon: this.state.reportIcon.main})
    }
    
    render() { console.log(this.state.reportIcon)
       const cityData= this.state.reportTemp
       const cityName= this.state.reportName
    
        
        if (this.state.reportTemp === null) {
            return(
                <ActivityIndicator color={"tomato"} size="large" marginTop="50%" />
            )
        } else {
            return(
                <FadeInView style={{flex: 1}}>
                    < View style={style.view}>
                        <View style={style.topView}>
                            <Text style={style.temp}>{cityName}</Text>
                            <Text>{this.day()} {this.date()}</Text>
                            <Text style={style.temp}>{Math.round(cityData.temp)} °C</Text>
                            {/* Math.round pour arrondir */}

                            <Text></Text>

                        </View>
                        <View style={{alignItems: 'center', paddingBottom: 50}}>
                            { this.icon() }
                        </View>
                        <Button 
                            type= 'outline'
                            // onPress={() => this.toDo()} 
                            onPress={() => this.toDo()} 
                            title='Quoi Faire ?' />  
                    </View>
                </FadeInView>
            )
        }
    }      
}

const style = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    },
    tomato: {
        color: 'tomato'
    },
    view: {
        backgroundColor: 'black',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'column',
    },
    topView: {
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        paddingTop: 40, 
        paddingBottom: 120, 
        alignItems: 'center'
    },
    temp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        padding: 20
    }
})
