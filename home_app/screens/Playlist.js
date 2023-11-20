import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function PlaylistScreen() {
	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>Music Library</Text>
			<View style={ styles.music }>
				<Text>This is where all of your music would be listed</Text>
			</View>
			<View style={ styles.button }>
				<FontAwesome.Button name="play">Play All</FontAwesome.Button>
				<FontAwesome.Button name="heart">Play Favorites</FontAwesome.Button>
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
		marginBottom: 10,
		fontWeight: 'bold',
		fontSize: 25
	},
	music: {
		width: '80%',
        height: '80%',
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
		marginTop: 15,
	}
});