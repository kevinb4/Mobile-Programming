import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>Welcome to the home screen.{"\n"}This will display basic user information along with the buttons below to guide the user through the app.</Text>
			<View style={ styles.button }>
				<FontAwesome.Button name="shield" onPress={() => navigation.navigate("Security")}>Security</FontAwesome.Button>
			</View>
			<View style={ styles.button }>
				<FontAwesome.Button name="camera" onPress={() => navigation.navigate("Security Cameras")}>Security Cameras</FontAwesome.Button>
			</View>
			<View style={ styles.button }>
				<FontAwesome.Button name="list" onPress={() => navigation.navigate("Playlist")}>Playlist</FontAwesome.Button>
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
	button: {
		paddingTop: 10
	}
});