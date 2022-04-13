import React from "react";
import {FlatList,  StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PokemonCard from "./PokemonCard";
import SearchPokemon from "./SearchPokemon";

export default function PokemonList(props) {
    const {pokemons, loadPokemons, isNext, renderHeader} = props;
    const loadMorePokemons = () =>{
        loadPokemons()
    }

    return (

        <FlatList
            ListHeaderComponent={<SearchPokemon data={pokemons}/>}

            data={pokemons}
            numColumns={2}
            contentContainerStyle={styles.flatListContentContainer}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({item}) => <PokemonCard item={item}/>}
            onEndReached={isNext &&loadMorePokemons}
            onEndReachedThreshold={0.2}
            ListFooterComponent={
                   isNext && (
                <ActivityIndicator size="large" style={styles.spinner}  color='#fe6100'/>
                )
            }
            // renderItem={({item})=><Image style={styles.text} source={{
            //     uri: item.image,
            // }}/>  }

        />

    );

}
const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5,
    },
    spinner:{
        marginTop:20,
        marginBottom: 25
        
    }

});

