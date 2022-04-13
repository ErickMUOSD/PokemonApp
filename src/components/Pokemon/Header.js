import React from "react";
import {Image, Text, View, StyleSheet, SafeAreaView} from "react-native";
import getBackgroundColor from "../../utils/getBackgroundColor";
import {capitalize} from "lodash";


export default function Header(props) {
    const {name, order, image, type} = props

    const color = getBackgroundColor(type)

    const bgStyles = {backgroundColor: color, ...styles.bg}

    return (
        <>
            <View style={bgStyles}/>
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        {capitalize(name)}
                    </Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{uri: image}} style={styles.image}/>

                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 350,
        borderBottomLeftRadius: 350,
        transform: [{scaleX: 2}],

    },
    content: {
        marginHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 40
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30
    },
    order: {
        color: "#fff",
        fontWeight: "bold"
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
    }

})