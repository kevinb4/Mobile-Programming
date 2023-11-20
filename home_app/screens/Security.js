import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SecurityScreen() {
	return (
		<View style={ styles.container }>
			<Text>This is where home alarms can be setup and turned on/off.</Text>
			<View style={ styles.button }><FontAwesome.Button name="plus">Add Alarm</FontAwesome.Button></View>
			<View style={ styles.button }><FontAwesome.Button name="minus">Delete Alarm</FontAwesome.Button></View>
			<View style={ styles.button }><FontAwesome.Button name="bolt">Add/Remove Alarm</FontAwesome.Button></View>
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