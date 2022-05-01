import React from "react";
import { View, Text, StyleSheet } from "react-native"


const BoxScreen = () => {
    return (
        <View style={styles.viewParentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewParentStyle: {
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewOneStyle: {
        alignSelf: "flex-start",
        width: 50,
        height: 50,
        backgroundColor: "red",
    },
    viewTwoStyle: {
        marginTop: 50,
        width: 50,
        height: 50,
        backgroundColor: "green"
    },
    viewThreeStyle: {
        width: 50,
        height: 50,
        alignSelf: "flex-start",
        backgroundColor: "purple",

    },
})

export default BoxScreen