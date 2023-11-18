import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function Perfil() {

    const [name, setName] = useState('Fernando Soares de Oliveira');
    const [email, setEmail] = useState('Fernandoliveira@smartyard.com');
    const [cep, setCep] = useState('12345-678');
    const [profileImage, setProfileImage] = useState(null);

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleCepChange = (text) => {
        setCep(text);
    };

    const handleProfileImageChange = () => {
        // (o mesmo código de seleção de imagem)
    };

    const handleRemoveProfileImage = () => {
        setProfileImage(null);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.headerTitle}>Editar Perfil</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/logom.png')} style={styles.logo} />
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.profileImage}>
                        {profileImage && (
                            <TouchableOpacity style={styles.removeImageButton} onPress={handleRemoveProfileImage}>
                                <Ionicons name="ios-trash" size={24} color="#fff" />
                            </TouchableOpacity>
                        )}
                        <Image
                            source={profileImage ? profileImage : require('../assets/perfil.png')}
                            style={styles.image}
                            resizeMode="cover"></Image>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.imageButton} onPress={handleProfileImageChange}>
                            <Ionicons name="ios-camera" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.location}>
                        <MaterialIcons name="location-on" size={18} color="red"></MaterialIcons>
                        <Text style={styles.locationText}>{cep}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            style={styles.inputField}
                            value={name}
                            onChangeText={handleNameChange}
                            placeholder="Nome"
                            multiline={true}
                            numberOfLines={2}
                        />
                        <TouchableOpacity style={styles.editIconContainer}>
                            <Ionicons name="create-outline" size={24} color="#3498db" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            style={styles.inputField}
                            value={email}
                            onChangeText={handleEmailChange}
                            placeholder="E-mail"
                            multiline={true}
                            numberOfLines={2}
                        />
                        <TouchableOpacity style={styles.editIconContainer}>
                            <Ionicons name="create-outline" size={24} color="#3498db" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            style={styles.inputField}
                            value={cep}
                            onChangeText={handleCepChange}
                            placeholder="CEP"
                            multiline={true}
                            numberOfLines={2}
                        />
                        <TouchableOpacity style={styles.editIconContainer}>
                            <Ionicons name="create-outline" size={24} color="#3498db" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    headerTitleContainer: {
        flex: 1,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
    },
    logoContainer: {
        paddingRight: 16,
    },
    logo: {
        width: 80,
        height: 80,
    },
    profileContainer: {
        alignItems: 'center',
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageButton: {
        position: 'absolute',
        bottom: 5,
        right: 40,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        marginBottom: "10%",
    },
    removeImageButton: {
        position: 'absolute',
        bottom: 10,
        right: 60,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e74c3c',
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    locationText: {
        color: 'black',
        alignSelf: "center"
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    inputFieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#3498db',
        marginBottom: 10,
        width: 250
    },
    inputField: {
        flex: 1,
        borderWidth: 0,
        paddingLeft: 0,
        fontSize: 16,
    },
    editIconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
});