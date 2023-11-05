import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Location from './components/Location';

export default function App() {
	return (
		<SafeAreaView style={ styles.container }>
			<StatusBar barStyle="dark-content" />
			<Location />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	  },
});
