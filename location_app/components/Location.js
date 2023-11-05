import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import NetInfo from '@react-native-community/netinfo';

class Location extends Component {
	state = {
		error: null,
		isConnected: true,
		coords: { latitude: 0, longitude: 0 },
	};

	async componentDidMount() {
		this.subscription = NetInfo.addEventListener(this.handleNetworkChange);

		const { isConnected } = await NetInfo.fetch();

		this.setState({ isConnected: isConnected });

		navigator.geolocation.getCurrentPosition(
			this.handleLocChange,
			this.handleError,
		);
		navigator.geolocation.watchPosition(
			this.handleLocChange,
			this.handleError,
		);
	}

	componentWillUnmount() {
		this.subscription();
	}

	handleNetworkChange = ({ isConnected }) => {
		this.setState({ isConnected: isConnected });
	};

	handleLocChange = location => {
		this.setState({
			coords: location.coords,
		});
	};

	handleError = error => {
		this.setState({ error });
	};

	render() {
		return (
		<View style={ styles.flex }>
			<MapView
				style={ styles.flex }
				showsBuildings={true}
				showsCompass={true}
				showsTraffic={true}
				region={{
					latitude: this.state.coords.latitude,
					longitude: this.state.coords.longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
			<Marker
				coordinate={this.state.coords}
				image={require('../assets/user_location_marker.png')}
				title="You are here!"
				description="This identifies your current location."
			/>
			</MapView>

			<Modal animationType="slide" visible={!this.state.isConnected}>
				<View>
					<Text style={ styles.modalText }>An internet connection cannot be found.{"\n"}Please ensure you have a valid signal.</Text>
				</View>
			</Modal>
		</View>
		);
	}
}

export default Location;

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	modalText: {
		color: '#990000',
		margin: 10,
		textAlign: 'center'
	  },
});
