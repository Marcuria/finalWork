import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const Enternumb = props => {
    return(
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title="Enter a number"/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    }
});