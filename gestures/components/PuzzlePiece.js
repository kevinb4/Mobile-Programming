import React, { Component } from 'react';
import { View, Image, StyleSheet, PanResponder, Animated } from 'react-native';

class PuzzlePiece extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pan: new Animated.ValueXY(),
		};

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null,{
				dx: this.state.pan.x,
				dy: this.state.pan.y,
			}],
			{
				useNativeDriver: false
			}),
			onPanResponderRelease: () => {
				this.state.pan.extractOffset();
			},
		});
	}

	render() {
		const { imageUri } = this.props;
		const { pan } = this.state;
		const panStyle = { transform: [{ translateX: pan.x }, { translateY: pan.y }] };

		return (
			<View style={styles.container}>
				<Animated.View {...this.panResponder.panHandlers} style={[panStyle]}>
					<Image source={imageUri} style={styles.image} />
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		margin: 10,
	},
	image: {
		width: 100,
		height: 100,
	},
});

export default PuzzlePiece;
