import React from 'react'
import { View, TextInput, Button, Image } from 'react-native'
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
        // this.submit() si activé, 1ère page === Résultats NAN
    }

    setCity (city) {
        this.setState({city})
    }

    submit() {
        this.props.navigation.navigate("Resultat", {city: this.state.city})
    }
    

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#333341"}}>
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
            </View>
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
            name= "Resultat"
            component={List} 
            options={{
                headerStyle: { backgroundColor: "black" },
                headerTitleStyle: { color: "tomato" }
            }}
        />
        <Stack.Screen 
            name= "Whazaaa"
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