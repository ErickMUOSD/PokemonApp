import React, {useEffect, useState} from "react";
import {View, Text, ScrollView, ActivityIndicator, StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


import {getPokemonById} from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Types from "../components/Pokemon/Types";
import Stats from "../components/Pokemon/Stats";
import Favorite from "../components/Favorite";
import useAuth from "../hooks/useAuth";

export default function Pokemon(props) {

    const {navigation, route: {params}} = props;
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const {auth} = useAuth();


    useEffect(() => {
        navigation.setOptions({
                headerRight: () => auth ? <Favorite id={pokemon?.id}/> : null,
            }
        )
    }, [navigation, params, pokemon, auth])

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonById(params.id)
                setPokemon(response)
                setIsLoading(false)
            } catch (e) {
                navigation.goBack();
            }
        })();
    }, [params]);

    if (isLoading) {
        return <ActivityIndicator size="large" color='#fe6100' style={styles.circular}/>
    }

    return (

        <ScrollView>

            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
            />
            <Types types={pokemon.types}/>
            <Stats stats={pokemon.stats}/>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    circular: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },


})