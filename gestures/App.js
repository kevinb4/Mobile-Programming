import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PuzzlePiece from './components/PuzzlePiece';

export default function App() {
	const images = [
		require('./assets/row-1-col-1.png'),
		require('./assets/row-1-col-2.png'),
		require('./assets/row-2-col-1.png'),
		require('./assets/row-2-col-2.png'),
	];

	return (
		<View style={styles.container}>
			<View style={styles.center}>
				<View style={styles.box}></View>
			</View>
			<Text style={styles.text}>Drag the puzzle pieces to the correct spot!</Text>
			<View style={styles.pictures}>
				<PuzzlePiece imageUri={images[2]} />
				<PuzzlePiece imageUri={images[0]} />
			</View>
			<View style={styles.pictures}>
				<PuzzlePiece imageUri={images[1]} />
				<PuzzlePiece imageUri={images[3]} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ecf0f1',
	},
	center: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
	box: {
		width: 205,
		height: 200,
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 2,
		marginTop: 100,
		margin: 10,
	},
	pictures: {
		flex: 0,
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});