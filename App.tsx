import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation'
export default class App extends React.Component {
  render(){
    return (
        <View style={{flex: 1}}>
          <StatusBar hidden={true}/>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </View>
    );
  }
}

