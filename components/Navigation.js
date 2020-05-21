import React from 'react'
import Search from './Search'
import About from './About'
import List from './List'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab= createBottomTabNavigator();

export default class Navigation extends React.Component {
    render() {

        return (
            <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused
                ? 'ios-search'
                : 'ios-search';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'black',
                borderWidth: 1
            }
            }}
        >
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="About" component={About} />
                {/* <Tab.Screen name="List" component={List} /> */}
            </Tab.Navigator>
        );
    }
}