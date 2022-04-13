import React from "react";
import {Text, View, StyleSheet,} from "react-native";
import getBackgroundColor from "../../utils/getBackgroundColor";

export default function Types(props) {
    const {types} = props

    return (
        <View style={styles.content}>
            {types.map((item, index) => {
                return (
                    <View key={index} style={{...styles.pill, backgroundColor: getBackgroundColor(item.type.name)}}>
                        <Text style={styles.name}>
                            {item.type.name}
                        </Text>
                    </View>
                )
            })}

        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    name: {
        color: "white",
         textTransform: 'capitalize'
    }
})