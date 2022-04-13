import React, {useCallback, useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {Button, Text} from "react-native-elements";
import useAuth from "../../hooks/useAuth";
import { getTotalElements} from "../../api/favorite";
import {useFocusEffect} from "@react-navigation/native";

export default function UserData() {
    const {auth, logout} = useAuth()
    const [total, totalPokemons] = useState(0)

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getTotalElements()

               totalPokemons(response)
            })();
        }, [])
    )



    return (
        <View style={styles.content}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.title}>{auth.userName}</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title="Nombre: " text={`${auth.firstName} ${auth.lastName}`}/>
                <ItemMenu title="UserName: " text={auth.userName}/>
                <ItemMenu title="Email: " text={auth.email}/>
                <ItemMenu title="Favorite Pokemons: " text={total}/>
            </View>
            <Button title="Log out" onPress={logout}/>
        </View>
    )
}

function ItemMenu(props) {
    const {title, text} = props

    return (
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    titleBlock: {
        marginBottom: 30
    },
    title: {
        fontSize: 30
    },
    dataContent: {
        marginBottom: 20
    },
    itemTitle:{
      fontWeight: "bold"
    },
    item:{
        flexDirection: "row",
        borderBottomWidth:1,
        borderColor: "#CFCFCF",
        paddingVertical:15
    }
})