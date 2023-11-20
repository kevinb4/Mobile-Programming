import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import SecurityScreen from "./screens/Security";
import CamerasScreen from "./screens/Cameras";
import PlaylistScreen from "./screens/Playlist";

import Camera1 from "./screens/cameras/1";
import Camera2 from "./screens/cameras/2";
import Camera3 from "./screens/cameras/3";
import Camera4 from "./screens/cameras/4";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="React Navigation Home" component={HomeScreen} />
				<Stack.Screen name="Security" component={SecurityScreen} />
				<Stack.Screen name="Security Cameras" component={CamerasScreen} />
				<Stack.Screen name="Playlist" component={PlaylistScreen} />

				<Stack.Screen name="Camera #1" component={Camera1} />
				<Stack.Screen name="Camera #2" component={Camera2} />
				<Stack.Screen name="Camera #3" component={Camera3} />
				<Stack.Screen name="Camera #4" component={Camera4} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}