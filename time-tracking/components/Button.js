import React from "react";
import { Alert, Text, TouchableOpacity, StyleSheet } from "react-native";

const ClientMessage = () => {
    const ShowAlert = () => {
        Alert.alert('Enjoy 10% off Dog Grooming!');
    };
    return (
        <TouchableOpacity onPress={ShowAlert} style={styles.button}>
            <Text style={styles.text}>Weekly Specials!</Text>
        </TouchableOpacity>
    );
};
export default ClientMessage;

// styles

const styles = StyleSheet.create({
    button: {
        fontFamily: 'Roboto',
        borderRadius: 40,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginTop: 15,
        width: 250,
        alignSelf: 'center',
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
});