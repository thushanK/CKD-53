import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";

export default function TabLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
		</Stack>
	);
}
