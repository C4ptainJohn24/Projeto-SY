import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    const lettuceIcon = require('../assets/Alface.png');
    const tomatoIcon = require('../assets/Tomate.png');
    const mintIcon = require('../assets/Hortela.png');
    const logo = require('../assets/Logo.png');

    const kitStatus = 'ligado'; // Alterar pra URL 

    //Se o kit estiver ligado vai fazer a parada e ficar verde ou vermelho
    const statusColor = kitStatus === 'ligado' ? 'rgb(0, 163, 71)' : 'red';

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Minhas Hortas</Text>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.cardContainer}>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('FA')}>
                    <Image source={lettuceIcon} style={styles.cardIcon} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Alface</Text>
                        <View style={styles.statusContainer}>
                            <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />
                            <Text style={styles.statusText}>Status: {kitStatus}</Text>
                        </View>
                        <View style={styles.monitorButton}>
                            <Text style={styles.monitorButtonText}>Monitorar</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('FT')}>
                    <Image source={tomatoIcon} style={styles.cardIcon} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Tomate</Text>
                        <View style={styles.statusContainer}>
                            <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />
                            <Text style={styles.statusText}>Status: {kitStatus}</Text>
                        </View>
                        <View style={styles.monitorButton}>
                            <Text style={styles.monitorButtonText}>Monitorar</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('FH')}>
                    <Image source={mintIcon} style={styles.cardIcon} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Hortelã</Text>
                        <View style={styles.statusContainer}>
                            <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />
                            <Text style={styles.statusText}>Status: {kitStatus}</Text>
                        </View>
                        <View style={styles.monitorButton}>
                            <Text style={styles.monitorButtonText}>Monitorar</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 16,
    },
    logo: {
        width: 80,
        height: 80,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    cardContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 10,
        width: '100%',
        height: '100%',
    },
    card: {
        width: '100%',
        height: '15%',
        backgroundColor: 'rgba(0, 177, 181, 0.3)',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    cardIcon: {
        width: 60,
        height: 60,
        marginRight: 16,
        marginStart: 10,
    },
    cardContent: {
        flex: 1,
        paddingVertical: 16,
    },
    cardText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 3,
    },
    statusText: {
        fontSize: 14,
        color: 'gray',
    },
    monitorButton: {
        backgroundColor: 'rgb(0, 192, 88)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        boxShadow: '1px 2px 9px green',
    },
    monitorButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});