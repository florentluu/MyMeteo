import React from 'react'
import { View, StatusBar, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './components/Navigation'
import * as SplashScreen from 'expo-splash-screen'
import { Asset } from 'expo-asset'

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error
export default class App extends React.Component {
  componentDidMount() {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000);
  }

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

