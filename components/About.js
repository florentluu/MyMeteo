import React from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'
import style from '../Style'

export default class About extends React.Component {

    search() {
        console.log('search',this.props.navigation.navigate("Search"))
    }
    render() {
        return(
            <View style={style.view}>
                <Text style={style.title}>A PROPOS DE L'APPLICATION </Text>
                <Text style={style.text}>In 2018, React Native had the 2nd highest number of contributors for any repository in GitHub. Today, React Native is supported by contributions from individuals and companies around the world including Callstack, Expo, Infinite Red, Microsoft, and Software Mansion.
                Our community is always shipping exciting new projects and exploring platforms beyond Android and iOS with repos like React Native Windows and React Native Web.
                React Native is being used in thousands of apps, but it's likely you've already used it in one of these apps:
                </Text>
                <Button color={style.button.color} onPress={() => this.search()} title="Search"/>
                {/* <ActivityIndicator color="#FF0000" size="large" animating={true} style={style.view} /> */}
            </View>
        )
    }
}

