import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, Text,} from "react-native";
import {getPokemonsApi, getPokemonDetailsByUrlApi} from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import SearchPokemon from "../components/SearchPokemon";




export default function Poke() {
    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState(null)

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextUrl);
            setNextUrl(response.next)
            const pokemonsArray = []
            //  setPokemons(pokemonsArray)
            for await (poke of response.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(poke.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    forms: pokemonDetails.forms,
                    types: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default

                })

            }
            setPokemons([...pokemons, ...pokemonsArray])
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <SafeAreaView>


            <PokemonList

                pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={nextUrl}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',


    },
    inputStyle: {
        backgroundColor: 'white',
        fontSize: 15,
    },
    leftContainer: {
        backgroundColor: 'white'
    }

});
