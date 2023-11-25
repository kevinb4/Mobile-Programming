import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity, Animated, StyleSheet, Text } from 'react-native';

class AnimationApp extends Component {
	constructor() {
		super();
		this.state = {
			wiggle: new Animated.Value(0),
			fade: new Animated.Value(0),
			zoom: new Animated.Value(1),
			visible: false,
		};
	}

	fadeIn = () => {
		Animated.timing(this.state.fade, {
			toValue: 1,
			duration: 3000,
			useNativeDriver: true,
		}).start(() => {
			this.setState({ visible: true });
		});
	};
	
	fadeOut = () => {
		Animated.timing(this.state.fade, {
			toValue: 0,
			duration: 3000,
			useNativeDriver: true,
		}).start(() => {
			this.setState({ visible: false });
		});
	};

	wiggle = () => {
		Animated.sequence([
			Animated.loop(
				Animated.sequence([
					Animated.timing(this.state.wiggle, {
						toValue: 1,
						duration: 300,
						useNativeDriver: true,
					}),
					Animated.timing(this.state.wiggle, {
						toValue: -1,
						duration: 300,
						useNativeDriver: true,
					})
				]),
				{
					iterations: 5
				}
			),
			Animated.timing(this.state.wiggle, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}),
		  ]).start()
	};

	zoomInOut = () => {
		Animated.timing(this.state.zoom, {
			toValue: 2,
			duration: 3000,
			useNativeDriver: true,
		}).start(() => {
			Animated.timing(this.state.zoom, {
				toValue: 1,
				duration: 3000,
				useNativeDriver: true,
			}).start();
		});
	};

	render() {
		const { fade, visible, zoom } = this.state;

		const spin = this.state.wiggle.interpolate({
			inputRange: [-1, 1],
			outputRange: ['-0.5rad', '0.5rad'],
		});

		const mask = {
			position: 'absolute',
			bottom: 120,
			transform: [
				{ rotate: spin },
				{ scaleX: zoom },
				{ scaleY: zoom },
			]
		};

		return (
			<ImageBackground source={require('./assets/spiderman_scene.png')} style={styles.container}>
				<View style={styles.overlay}>
					{visible && (
						<Animated.Image
							source={require('./assets/spiderman.png')}
							style={[styles.spiderman, { opacity: fade }]}
						/>
					)}
					<Animated.Image
						source={require('./assets/spiderman_mask.png')}
						style={mask}
					/>
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button} onPress={this.fadeIn}>
							<Text style={styles.buttonText}>Fade In</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={this.fadeOut}>
							<Text style={styles.buttonText}>Fade Out</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={this.wiggle}>
							<Text style={styles.buttonText}>Wiggle</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={this.zoomInOut}>
							<Text style={styles.buttonText}>Zoom</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},
	overlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	spiderman: {
		position: 'absolute',
		resizeMode: 'contain',
		width: 300,
		height: 300,
		top: 50,
	},
	button: {
		backgroundColor: '#dddddd',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 20,
		marginTop: 20,
		marginRight: 30,
		marginLeft: 30,
		width: 85,
		height: 35,
	},
	buttonText: {
		color: 'black',
		textAlign: 'center',
	},
	buttons: {
		alignContent: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '80%',
		bottom: 5,
		position: 'absolute',
	}
});

export default AnimationApp;
