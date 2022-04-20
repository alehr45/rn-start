import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native"


const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 23 },
        { name: "Friend #2", age: 19 },
        { name: "Friend #3", age: 45 },
        { name: "Friend #4", age: 12 },
        { name: "Friend #5", age: 32 },
        { name: "Friend #6", age: 31 },
        { name: "Friend #7", age: 16 },
        { name: "Friend #8", age: 18 },
        { name: "Friend #9", age: 1 },
    ];

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>

                    </View>
                )
            }}
        />
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})


export default ListScreen;