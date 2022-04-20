import React,   { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native"


const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={{padding: 20}}>
            <Button title="Increase Number" onPress={() => {
                setCounter(counter + 1)
            }} />
            <Button title="Decrease Number" onPress={() => {
                 setCounter(counter - 1)
            }} />
            <Text style={{textAlign: "center", paddingTop: 20}}>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen