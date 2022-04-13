import React from "react";
import {Text, View, StyleSheet, Image, TouchableWithoutFeedback} from "react-native";
import getBackgroundColor from "../utils/getBackgroundColor";
import {capitalize} from "lodash";
import {useNavigation} from "@react-navigation/native";


export default function PokemonCard(props) {
    const {id, image, name, types, order} = props.item
    const pokemonColor = getBackgroundColor(types)
    const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles}
    const navigation = useNavigation();

    const goToPokemon = () => {
        navigation.navigate("PokemonS", {id: id})
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>

                        <Text style={styles.number}>#{`${order}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}> {capitalize(name)}</Text>
                        <Image source={{uri: image}} style={styles.image}/>
                    </View>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 150
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11

    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
        //  textTransform: 'capitalize'


    }

})
