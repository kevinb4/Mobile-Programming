import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function CamerasScreen({ navigation }) {
	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>Here your security cameras will be listed below for you to view.</Text>
			<View style={ styles.button }>
				<FontAwesome.Button name="eye" onPress={() => navigation.navigate("Camera #1")}>View Camera #1</FontAwesome.Button>
			</View>
			<View style={ styles.button }>
				<FontAwesome.Button name="eye" onPress={() => navigation.navigate("Camera #2")}>View Camera #2</FontAwesome.Button>
			</View>
			<View style={ styles.button }>
				<FontAwesome.Button name="eye" onPress={() => navigation.navigate("Camera #3")}>View Camera #3</FontAwesome.Button>
			</View>
			<View style={ styles.button }>
				<FontAwesome.Button name="eye" onPress={() => navigation.navigate("Camera #4")}>View Camera #4</FontAwesome.Button>
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