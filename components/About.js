import React from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator, Image } from 'react-native'
import style from '../Style'

export default class About extends React.Component {

    search() {
        console.log('search',this.props.navigation.navigate("Search"))
    }
    render() {
        return(
            <View style={{ 
                textAlign: 'center', 
                paddingBottom: 30, 
                paddingTop: 30,
                backgroundColor: '#333341',
                flex: 1,
                paddingHorizontal: 20
            }}>
                <Text style={{paddingTop: 30, paddingBottom: 30, textAlign: 'center', fontSize: 20, color: 'tomato'}}>A PROPOS DE WAZAAA </Text>
                <Text style={{color: 'white', fontSize: 15, paddingBottom: 30, textAlign: 'justify'}}>
                Cette application sous le doux nom de WAZAAA (ie: "What's up?") pourra enfin guider toutes votre journée selon la météo.
                Que ce soit en weekend, en séminaire, en road trip ou peut être même en fugue. WAZAAA vous a sélectionné une multitude de lieux atypiques et des Must See dans la ville que vous allez découvrir.
                Profitez de cette aplication et n'hésitez pas à me faire part de vos endroits favoris via ce mail : contact@wazaaa.com

                </Text>
                <Button color={style.button.color} onPress={() => this.search()} title="Rechercher une ville"/>
                {/* <ActivityIndicator color="#FF0000" size="large" animating={true} style={style.view} /> */}
                <Image
                    style={{width: 200, height: 200, alignSelf: 'center', marginTop: 30}}
                    source={require('./icons/w.gif')}
                />
            </View>
        )
    }
}

