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


export default function AddKit() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={uri = ('https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26909/irrigacao-afe.jpg')}
                resizeMode="cover"
                style={styles.image}>
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

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Insira o Código do seu Kit Smart-Yard</Text>
                    <View
                        style={{
                            backgroundColor: 'lightgray',
                            flexDirection: 'row',
                            justifyContent: 'left',
                            borderRadius: 20,
                            marginTop: 25,
                            marginBottom: 10,
                        }}>

                        <TextInput
                            placeholder="URL do Kit"
                            style={styles.input}
                        />
                    </View>
                    <Image
                        resizeMode="stretch"
                        style={styles.imglogo3}
                        source={uri = ('https://images-americanas.b2w.io/produtos/35691629/imagens/arduino-uno-r3-com-cabo-usb/35691627_1_large.jpg')}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Conteudo')}>
                        <Text style={styles.buttonText}>Finalizar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    containerHeader: {
        marginTop: '8%',
        marginBottom: '15%',
        paddingStart: '5%',
        height: '30%',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        alignSelf: 'center',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 600,
        width: 'auto',
    },
    input: {
        height: 40,
        fontSize: 14,
        marginLeft: 15,
        color: 'gray',
        width: '100%',
    },

    imglogo2: {
        width: 200,
        height: 200,
        borderColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    imglogo3: {
        width: 125,
        height: 125,
        borderColor: 'white',
        borderRadius: 10,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: 'green',
        width: '60%',
        borderRadius: 14,
        paddingVertical: 4,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        alignSelf: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});
