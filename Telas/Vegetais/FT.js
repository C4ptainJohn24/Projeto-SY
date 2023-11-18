import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


export default function FT() {
    const navigation = useNavigation();

    // Substitua as URLs das imagens de fundo e da verdura
    const vegetableImage = 'https://i.ibb.co/bQ9yjJG/image.png';
    const simpatia = 'https://i.ibb.co/zXzjgqP/Design-sem-nome-8.png';
    const logo = 'https://i.ibb.co/z72W3Ry/logo-removebg-preview.png';

    // Defina o status como 'ligado' ou 'desligado'
    const kitStatus = 'ligado'; //URL

    // Determine a cor do círculo com base no status
    const statusColor = kitStatus === 'ligado' ? 'rgb(0, 255, 71)' : 'red';

    const arduinoData = {
        humidity: 60,
        temperature: 25,
        soilMoisture: 80,
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ zIndex: 3, paddingLeft: 20 }}>
                <View style={{ marginBottom: 20 }}></View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        zIndex: 3,
                        width: 40,
                        marginBottom: -100,
                    }}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}>
                    <Ionicons name="close-outline" size={40} color="black" />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Image source={{ uri: logo }} style={styles.logo} />
                </View>
            </View>
            <Image source={require('../../assets/Tomate.png')} style={styles.vegetableImage} />
            <Text style={styles.vegetableName}>Minha horta de Tomate</Text>
            <View style={styles.statusContainer}>
                <View
                    style={[styles.statusIndicator, { backgroundColor: statusColor }]}
                />
                <Text style={styles.statusText}>Status: {kitStatus}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.sensorData}>
                    <View style={styles.sensor}>
                        <Text style={styles.label}>Umidade do Solo</Text>
                        <Text style={styles.value}>{arduinoData.soilMoisture}%</Text>
                    </View>
                    <View style={styles.sensor}>
                        <Text style={styles.label}>Umidade do Ar</Text>
                        <Text style={styles.value}>{arduinoData.humidity}%</Text>
                    </View>
                    <View style={styles.sensor}>
                        <Text style={styles.label}>Temperatura</Text>
                        <Text style={styles.value}>{arduinoData.temperature}°C</Text>
                    </View>
                </View>
                <View style={styles.informa}>
                    <Image source={{ uri: simpatia }} style={styles.vegetableImage} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'row',
        justifyContent: 'space-between',
        padding: 16,
        paddingLeft: '70%',
    },
    vegetableImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 30,
    },
    vegetableName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginTop: 20,
        zIndex: 1,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 51,
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 100,
        marginRight: 8,
    },
    statusText: {
        fontSize: 16,
        color: 'black',
    },
    sensorData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    sensor: {
        flex: 5,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    label: {
        fontSize: 11,
        marginBottom: 10,
        color: 'black',
    },
    value: {
        fontSize: 20,
        color: '#333',
    },
    informa: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'flex-end',
        height: 900,
        width: '100%',
        borderTopStartRadius: 50,
        borderTopRightRadius: 50,
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 15,
    },
});