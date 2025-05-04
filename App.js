import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function UserList({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>User List Screen</Text>
            <Button
                title="Go to User Details" onPress={() => navigation.navigate('UserDetails', { userName: 'John Doe' })}
            />
        </View>
    );
}

function UserDetails() {
    const route = useRoute();
    const { userName } = route.params;

    return (
        <View style={styles.container}>
            <Text>User Details Screen</Text>
            <Text>Name: {userName}</Text>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UserList" component={UserList} />
                <Stack.Screen name="UserDetails" component={UserDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
