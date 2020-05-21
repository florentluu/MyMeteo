import React from 'react'
import { View, TextInput, Button } from 'react-native'
import style from '../Style'
import { createStackNavigator } from '@react-navigation/stack'
import List from './List'
import Activity from './Activitiy'

class Search extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            city: ''
        }
        this.submit()
    }

    setCity (city) {
        this.setState({city})
    }

    submit() {
        this.props.navigation.navigate("Resultat", {city: this.state.city})
        console.log(this.state.city)
    }
    

    render() {
        return (
            <View>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style={style.input}
                    value={this.state.city}
                />
                <Button color={style.button.color} 
                onPress={() => this.submit()} 
                title='Rechercher' />
            </View>
        )
    }
}


const Stack= createStackNavigator()

function MyStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Recherche" component={Search} />
        <Stack.Screen 
            name= "Resultat"
            component={List} 
            options={{
                headerStyle: { backgroundColor: "black" },
                headerTitleStyle: { color: "white" }
            }}
        />
        <Stack.Screen 
            name= "toDO"
            component={Activity} 
            options={{
                headerStyle: { backgroundColor: "black" },
                headerTitleStyle: { color: "white" }
            }}
        />
    </Stack.Navigator>
    )
}

export default MyStack