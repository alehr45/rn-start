import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native"

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase_number':
            return { ...state, counter: state.counter + action.payload }
        case 'decrease_number':
            return { ...state, counter: state.counter - action.payload }
        default:
            return;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })


    return (
        <View style={{ paddingTop: 50 }}>
            <Button title="Increase Number" onPress={() => { dispatch({ type: 'increase_number', payload: 1 }) }} />
            <Button title="Decrease Number" onPress={() => { dispatch({ type: 'decrease_number', payload: 1 }) }} />
            <Text style={{ textAlign: "center", paddingTop: 20 }}>Current Count: {state.counter} </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen