import React from "react";
import {Text, View, StyleSheet,} from "react-native";
import getBackgroundColor from "../../utils/getBackgroundColor";

export default function Stats(props) {

    const {stats} = props;
    const barStyles = (num) => {
        let color = 'red'
        if (num >= 49 && num <= 79) color = 'yellow'
        else if (num >= 80) color = 'green'
        return {
            backgroundColor: color,
            width: `${num}%`,
        }
    }
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {stats.map((item, index) => {
                return (
                    <View key={index} style={styles.block}>
                        <View style={styles.blockTitle}>
                            <Text style={styles.statName}>
                                {item.stat.name}
                            </Text>
                        </View>
                        <View style={styles.blockInfo}>
                            <Text style={styles.number}>
                                {item.base_stat}
                            </Text>
                            <View style={styles.bgBar}>
                                <View style={[styles.bar, barStyles(item.base_stat)]}></View>
                            </View>
                        </View>

                    </View>
                )
            })}


        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5,

    },
    blockTitle: {
        width: "30%"
    },
    statName: {
        fontSize: 12,
        color: "#6b6b6b",
        textTransform: 'capitalize'
    },
    blockInfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center"
    },
    number: {
        width: "12%",
        fontSize: 12,
        fontWeight: "bold"
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden"
    },
    bar: {

        height: 5,
        borderRadius: 20
    }
})