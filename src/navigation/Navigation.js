import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Button, Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import pokeball from '../assets/pokebola.png'

import Account from "../screens/Account";
import Pokedex from "../screens/Poke";
import Favorite from "../screens/Favorite";
import Pokemon from "../screens/Pokemon";


const PokemonStack = createNativeStackNavigator();

function PokemonStackScreen() {
    return (
        <PokemonStack.Navigator>
            <PokemonStack.Screen name="PokedexS" component={Pokedex} options={
                {
                    title: "",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: "white",
                    headerShadowVisible: false
                }
            }/>
            <PokemonStack.Screen name="PokemonS" component={Pokemon} options={{
                title: "",

                headerTransparent: true,
                headerTintColor: "white",
                headerShadowVisible: false
            }}/>
        </PokemonStack.Navigator>
    )
}

const FavoriteStack = createNativeStackNavigator();

function FavoriteStackScreen() {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name="FavoriteS" options={{
                title: "",
                headerTransparent: true,
                headerTintColor: "white",
                headerShadowVisible: false
            }} component={Favorite}/>
            <FavoriteStack.Screen name="PokemonS" options={{
                title: "",
                headerTransparent: true,
                headerTintColor: "white",
                headerShadowVisible: false
            }} component={Pokemon}/>

        </FavoriteStack.Navigator>
    )
}

const AccountStack = createNativeStackNavigator();


function AccountStackScreen() {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="AccountS" options={{title: 'Account'}} component={Account}/>

        </AccountStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}
        >
            <Tab.Screen
                name="Favorites"
                component={FavoriteStackScreen}

                options={{
                    tabBarLabel: "Favorite",

                    tabBarIcon: ({color, size}) => <Ionicons name="heart" color={color} size={size}/>,
                    headerTitle: "Favorites"
                }}
            />
            <Tab.Screen
                name="Pokedex"
                component={PokemonStackScreen}
                options={{
                    tabBarIcon: () => renderImage()
                }}
            />

            <Tab.Screen
                name="Account"
                component={AccountStackScreen}
                options={{
                    tabBarIcon: ({color, size, focused,}) => {
                        return <Ionicons name="md-wallet" color={color} size={size} focused={focused}/>
                    }

                }}/>
        </Tab.Navigator>
    )
}

function renderImage() {
    return <Image
        source={pokeball}
        style={{
            width: 50,
            height: 50,
            top: -2
        }}/>

}
