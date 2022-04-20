import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native"


const ColorScreen = () => {
    const [colors, setColors] = useState([])
    console.log(colors)

    return (
        <View>
            <Button onPress={() => {
            setColors([...colors, randomRgb()])    


        }} title="Add a Color" />
        <View style={{height: 100, width: 100, backgroundColor: randomRgb()}}></View>
      </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
    
}

const styles = StyleSheet.create({})

export default ColorScreen