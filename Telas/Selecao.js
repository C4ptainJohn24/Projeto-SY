import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions, Animated, StatusBar, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;

const legumesData = [
    { id: '1', nome: 'Alface', imagem: require('../assets/Alface.png') },
    { id: '2', nome: 'Tomate', imagem: require('../assets/Tomate.png') },
    { id: '3', nome: 'Hortelã', imagem: require('../assets/Hortela.png') },
];

const InstructionScreen = ({ onComplete }) => {
    const [page, setPage] = useState(1);

    const handleNextPage = () => {
        if (page < 3) {
            setPage(page + 1);
        } else {
            onComplete();
        }
    };

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return (
                    <View>
                        <Text style={styles.instructionText}>Bem-vindo à tela de seleção de legumes!</Text>
                        <Text style={{ textAlign: 'center', marginBottom: 50, marginTop: 50, color: 'white', fontWeight: 'bold', }}>
                            Deslize para ver diferentes opções e selecione o legume desejado.
                        </Text>
                        <Image
                            source={require('../assets/Oque.gif')}
                            style={{ width: 360, height: 360, left: 50, resizeMode: 'contain', alignSelf: 'center' }}
                        />
                    </View>

                );
            case 2:
                return (
                    <View>
                        <Text style={styles.instructionText}>
                            Ao selecionar um legume, ele será destacado. Pressione "Confirmar" para continuar.
                        </Text>
                        <Image
                            source={require('../assets/Confirme.png')}
                            style={{ width: 360, height: 360, alignSelf: 'center' }}
                        />
                    </View>
                );
            case 3:
                return (
                    <View>
                        <Text style={styles.instructionText}>
                            Agora você está pronto para começar! Pressione "Confirmar" na tela de seleção.
                        </Text>
                        <Image
                            source={require('../assets/logoofc.png')}
                            style={{ width: 200, height: 200, alignSelf: 'center' }}
                        />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.instructionContainer}>
            {renderPageContent()}
            <TouchableOpacity style={styles.nextButton} onPress={handleNextPage}>
                <Text style={styles.nextButtonText}>{page < 3 ? 'Próximo' : 'Concluir'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const HelpScreen = ({ onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={styles.helpContainer}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Arraste os legumes até chegar no pretendido. Ao identificar o legume pretendido, clique e depois confirme</Text>
                <Image
                    source={require('../assets/instrucao1.png')}
                    style={{ width: 360, height: 360, left: 50, resizeMode: 'contain' }}
                />

                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const SelecaoLegumeScreen = ({ navigation }) => {
    const [selectedLegume, setSelectedLegume] = useState(null);
    const [showInstructions, setShowInstructions] = useState(true);
    const [showHelp, setShowHelp] = useState(false);
    const animatedValue = new Animated.Value(0);

    useEffect(() => {
        Animated.spring(animatedValue, {
            toValue: 1,
            friction: 4,
            useNativeDriver: false,
        }).start();
    }, [animatedValue]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 0],
    });

    const handleLegumePress = (legume) => {
        setSelectedLegume(legume);
    };

    const renderItem = ({ item, index }) => {
        const isSelected = selectedLegume && selectedLegume.id === item.id;

        const animatedStyle = {
            transform: [{ translateY }],
        };

        return (
            <TouchableOpacity
                style={isSelected ? styles.selectedLegume : styles.legumeContainer}
                onPress={() => handleLegumePress(item)}
            >
                <Animated.Image
                    source={item.imagem}
                    style={[
                        styles.legumeImage,
                        isSelected && styles.selectedLegumeImage,
                        animatedStyle,
                    ]}
                />
                <Text style={styles.legumeNome}>{item.nome}</Text>
            </TouchableOpacity>
        );
    };

    const handleHelpButtonPress = () => {
        setShowHelp(true);
    };

    const handleCloseHelp = () => {
        setShowHelp(false);
    };

    return (
        <LinearGradient
            colors={['#7ed957', '#0097b2']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            {showInstructions && (
                <View style={styles.overlay}>
                    <InstructionScreen onComplete={() => setShowInstructions(false)} />
                </View>
            )}
            <View style={styles.header}>
                <Image source={require('../assets/logoofc.png')} style={styles.logo} />
            </View>
            <Text style={styles.title}>Selecione o Legume Correspondente ao Kit</Text>
            <FlatList
                data={legumesData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
            />
            {selectedLegume && (
                <Animated.View style={[styles.buttonContainer, { transform: [{ translateY }] }]}>
                    <TouchableOpacity style={styles.button}>
                        <AntDesign name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                </Animated.View>
            )}
            {!showInstructions && (
                <TouchableOpacity style={styles.helpButton} onPress={handleHelpButtonPress}>
                    <View style={styles.helpButtonContent}>
                        <Text style={styles.helpButtonIcon}>?</Text>
                    </View>
                </TouchableOpacity>
            )}
            {showHelp && <HelpScreen onClose={handleCloseHelp} />}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: STATUSBAR_HEIGHT,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    instructionContainer: {
        backgroundColor: '#202020',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    instructionText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        marginBottom: 14,
        color: 'white',
        fontWeight: 'bold',
    },
    nextButton: {
        backgroundColor: '#0097b2',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    nextButtonText: {
        color: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%',
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24,
        marginRight: 10,
        textAlign: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    legumeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 30,
        height: width - 30,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'transparent',
    },
    selectedLegume: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 30,
        height: width - 30,
        margin: 10,
        borderRadius: 900,
        padding: 10,
        backgroundColor: 'green',
        overflow: 'hidden', // Adicionado para cortar as bordas da imagem
    },
    legumeImage: {
        width: width - 100,
        height: width - 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    selectedLegumeImage: {
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 10,
    },
    legumeNome: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1,
    },
    button: {
        backgroundColor: '#7ed957',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpButton: {
        position: 'absolute',
        bottom: 250,
        right: 20,
        zIndex: 3,

    },
    helpButtonContent: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpButtonIcon: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0097b2',
    },
    helpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(1, 1, 1, 0.9)',
    },

    closeButton: {
        backgroundColor: '#0097b2',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
    },
});

export default SelecaoLegumeScreen;
