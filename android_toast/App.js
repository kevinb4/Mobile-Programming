import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';

export default function App() {
	const handlePress = () => {
		ToastAndroid.show('React Native Modules are not fun!', ToastAndroid.SHORT);
	};
  
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handlePress} style={styles.button}>
				<Text style={styles.buttonText}>Press Me!</Text>
			</TouchableOpacity>
		</View>
	);
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	button: {
		backgroundColor: '#61dafb',
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
});