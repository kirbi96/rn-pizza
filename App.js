import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "react-native-screens/native-stack"
import { enableScreens } from "react-native-screens"
import MainStack from "./src/screens/Main"

const App = () => {
	enableScreens()
	const AppStack = createNativeStackNavigator()


	return (
		<NavigationContainer>
			<AppStack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<AppStack.Screen name="MainStack" component={MainStack} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default App
