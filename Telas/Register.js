import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';


import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { auth, db } from '../firebase';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function Register() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert("Senhas não coincidem.")
            return
        }
        if (fullName == '') {
            alert("Coloque seu nome")
            return
        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
                navigation.navigate('Conteudo');
                // Navigate to the Home screen after registration
                const usersRef = firebase.collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Conteudo', { user: data })
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => alert(error.message));
    };

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
                colors={['#FFFFFF', '#29BAD8']}
                style={styles.background}
            />

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Animatable.View
                    animation="fadeInLeft"
                    delay={500}
                    style={styles.containerHeader}>
                    <Image
                        resizeMode="stretch"
                        style={styles.imglogo5}
                        source={require('../assets/logo2.png')}
                    />
                </Animatable.View>
                <View
                    style={styles.caixatexto}>
                    <TextInput
                        placeholder="Nome Completo"
                        style={styles.input}
                        value={fullName}
                        onChangeText={text => setFullName(text)}
                    />
                </View>
                <View
                    style={styles.caixatexto}>
                    <TextInput
                        placeholder="E-mail"
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

                <View
                    style={styles.caixatexto}>
                    <TextInput
                        placeholder="Confirmar Senha"
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Registrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Logar')}>
                    <Text style={styles.registerText}>
                        Já possui uma conta? Clique para Logar!
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
        marginTop: '4%',
        paddingStart: '5%',
        height: '20%',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    registerText: {
        color: 'black',
    },
    background: {
        height: '100%',
        width: 'auto',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },

    message: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    caixatexto: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'left',
        borderRadius: 10,
        marginTop: '5%',
        marginBottom: '7%',
        width: '85%',
        height: 48,
        alignItems: 'center',
        elevation: 10,
        shadowColor: 'black',

    },
    containerForm: {
        backgroundColor: 'transparent',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: '5%',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginTop: 28,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: '10%',
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
        marginLeft: '10%'
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
        width: 150,
        height: 150,
        borderColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    imglogo5: {
        width: 150,
        height: 150,
        borderColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    button: {
        justifyContent: "flex-end",
        width: 140,
        height: 50,
        backgroundColor: 'white',
        marginTop: '25%',
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#29BAD8',
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
        fontFamily: 'Quicksand_400Regular'
    },
});
