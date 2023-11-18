import { createStackNavigator } from '@react-navigation/stack';

import Home from './Menu';
import Alface from './Vegetais/FA'
import Hortelã from './Vegetais/FH'
import Tomate from './Vegetais/FT'


export default function Hortas() {
    const Stack = new createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FA"
                component={Alface}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FH"
                component={Hortelã}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FT"
                component={Tomate}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}