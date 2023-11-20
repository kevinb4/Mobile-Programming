import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Camera3() {
	return (
		<View style={ styles.container }>
			<Text>Below is a live feed of Camera #3</Text>
			<View style={ styles.camera }>
                <Ionicons name="videocam-outline" size={150} color="yellow" />
            </View>
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		textAlign: "center",
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10
	},
    camera: {
        width: '90%',
        height: '90%',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});