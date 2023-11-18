import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import Abertura3 from './Telas/Abertura/Abertura3.js';
import Abertura1 from './Telas/Abertura/Abertura1.js';
import Abertura2 from './Telas/Abertura/Abertura2.js';
import Noticias from './Telas/Noticias.js';
import Conteudo from './Telas/Navbar';
import Register from './Telas/Register';
import AddKit from './Telas/AddKit'
import Logar from './Telas/Logar';
const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Abertura1"
                component={Abertura1}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Abertura2"
                component={Abertura2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Abertura3"
                component={Abertura3}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Logar"
                component={Logar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Conteudo"
                component={Conteudo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Noticias"
                component={Noticias}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Registro"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddKit"
                component={AddKit}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}