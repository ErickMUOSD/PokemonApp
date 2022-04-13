import React, {useEffect, useState, useCallback} from "react";
import {Text, View, StyleSheet} from "react-native";
import useAuth from "../hooks/useAuth";
import {Button} from "react-native-elements";
import  {useFocusEffect} from "@react-navigation/native";

import {getPokemonById, getPokemonDetailsByUrlApi, getPokemonsApi} from "../api/pokemon";
import {getAllPokemonStorage} from "../api/favorite"
import PokemonList from "../components/PokemonList";
import {useNavigation} from "@react-navigation/native";

export default function Favorite() {
    const {auth} = useAuth()
    const [pokemons, setPokemons] = useState([])
    const navigation = useNavigation();


    useFocusEffect(
        useCallback(() => {
            if (auth) {
                (async () => {
                    const response = await getAllPokemonStorage()

                    const pokemonsArray = []
                    for await (id of response) {
                        const pokemonDetails = await getPokemonById(id)
                        pokemonsArray.push({
                            id: pokemonDetails.id,
                            name: pokemonDetails.name,
                            forms: pokemonDetails.forms,
                            types: pokemonDetails.types[0].type.name,
                            order: pokemonDetails.order,
                            image: pokemonDetails.sprites.other['official-artwork'].front_default
                        })
                        setPokemons([...pokemons, ...pokemonsArray])
                    }
                })();
            }

        }, [auth])
    )



    if (!auth) return (
        <View style={styles.login}>
            <Text style={styles.text}>Please login to see your favorite Pokemons!</Text>
            <View style={styles.btn}>
                <Button title="Login" onPress={() => navigation.navigate('Account')}/>
            </View>
        </View>
    )
    return (
        <View>
            <PokemonList
                pokemons={pokemons}

              />
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        margin: 10,
        height: "100%",
        justifyContent: "center",

    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black"
    },
    btn: {
        marginTop: 20
    }
})
