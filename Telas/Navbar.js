import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen1 from './Noticias';
import Vegetais from './Vegetais';
import Perfil from './Perfil';
import Selecao from './Selecao'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Conteudo() {
    return (
        <Tab.Navigator
            activeColor="white"
            inactiveColor="white"
            barStyle={styles.navbar}
        >
            <Tab.Screen name="Notícias" component={HomeScreen1} options={{
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="newspaper-variant" color={color} size={26} />)
            }} />
            <Tab.Screen name="Seleção" component={Selecao} options={{
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="sprout" color={color} size={26} />)
            }} />
            <Tab.Screen name="Vegetais" component={Vegetais} options={{
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="sprout" color={color} size={26} />)
            }} />
            <Tab.Screen name="Perfil" component={Perfil} options={{
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="face-recognition" color={color} size={26} />)
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#4dad35',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1,
        height: 70,
        
    },
});