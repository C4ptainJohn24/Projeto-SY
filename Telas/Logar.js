import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function Logar() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Conta Logada:', user.email);
                navigation.navigate('Conteudo')
            })
            .catch(error => alert(error.message))
    }

    let [fontsLoaded] = useFonts({
        Quicksand_700Bold,
        Quicksand_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#D0D3D7', '#0097B2']}
                style={styles.background}
            />
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Animatable.View
                    animation="fadeInLeft"
                    delay={500}
                    style={styles.containerHeader}>
                    <Image
                        resizeMode="stretch"
                        style={styles.imglogo2}
                        source={require('../assets/logoofc.png')}
                    />
                </Animatable.View>
                <View
                    style={styles.caixatexto}>
                    <TextInput
                        placeholder="Nome de Usuário ou E-mail"
                        fontFamily='Quicksand_700Bold'
                        style={styles.input}
                        value={email}
                        onChangeText={text => setEmail(text)}

                    />
                </View>

                <View
                    style={styles.caixatexto}>
                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry

                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.registerText}>
                        Não possui uma conta?Cadastre-se
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    containerHeader: {
        marginTop: '8%',
        marginBottom: '15%',
        paddingStart: '5%',
        height: '20%',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    containerForm: {
        backgroundColor: 'transperent',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: '5%',
        alignContent: 'center',
        alignItems: 'center',
    },
    caixatexto: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'left',
        borderRadius: 10,
        marginTop: '5%',
        marginBottom: '10%',
        width: '85%',
        height: 48,
        alignItems:'center',
        elevation: 10,
        shadowColor: 'black',
        
    },
    title: {
        fontSize: 30,
        marginTop: 28,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: '15%',
        color: 'white', 
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        height: 'auto',
        width: 'auto',

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: 'auto',

    },
    input: {
        height: 40,
        fontSize: 14,
        marginLeft: 3,
        color: 'black',
        width: '100%',
        marginLeft:'10%'
    },
    imglogo3: {
        width: 20,
        height: 20,
        borderColor: 'white',
        margin: 5,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 15,
    },
    imglogo2: {
        width: 200,
        height: 200,
        borderColor: 'white',
        margin: 10,
        borderRadius: 10,
        marginBottom: '15%'
    },
    button: {
        justifyContent: "flex-end",
        width: 140,
        height: 50,
        backgroundColor: 'white',
        marginTop: '35%',
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    background: {
        height: '100%',
        width: 'auto',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    buttonText: {
        color: '#198F8F',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Quicksand_700Bold',

    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: 'white',
        fontFamily: 'Quicksand_400Regular'    },
});