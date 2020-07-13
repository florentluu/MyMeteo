import React from 'react'
import { View, TextInput, Button, Image } from 'react-native'
import style from '../Style'
import { createStackNavigator } from '@react-navigation/stack'
import List from './List'
import Activity from './Activitiy'
import FadeInView from './animations/FadeInView'

class Search extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            city: ''
        }
    }

    setCity (city) {
        this.setState({city})
    }

    submit() {
        this.props.navigation.navigate("RÉSULTAT", {city: this.state.city})
    }
    

    render() {
        return (
            <FadeInView style={{flex: 1, backgroundColor: "#333341"}}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style={style.input}
                    value={this.state.city}
                    color='white'
                    placeholder='Rechercher une ville...'
                    placeholderTextColor="gray"
                />
                <Button color={style.button.color} 
                onPress={() => this.submit()} 
                title='Rechercher' />
                <Image
                    style={{width: 200, height: 200, alignSelf: 'center', marginTop: 180}}
                    source={require('./icons/w.gif')}
                />
            </FadeInView>
        )
    }
}


const Stack= createStackNavigator()

function MyStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen 
            name="Recherche" 
            component={Search}
            options={{
                headerStyle: { backgroundColor: "black" },
                headerTitleStyle: { color: "white" }
            }}
        />
        <Stack.Screen 
            name= "RÉSULTAT"
            component={List} 
            options={{
                headerStyle: { backgroundColor: "black" },
                headerTitleStyle: { color: "tomato" },
                headerTitle: false
            }}
        />
        <Stack.Screen 
            name= "WHAZA"
            component={Activity} 
            options={{
                headerStyle: { backgroundColor: "black" },
                headerTitleStyle: { color: "tomato" },
                headerTitle: false
            }}
        />
    </Stack.Navigator>
    )
}

export default MyStack