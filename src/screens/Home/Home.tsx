import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "expo-router";
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import { transcribe } from '../../api/request';
import ApiButton from '../../components/ApiButton';
import { RootStackParamList } from "../../types/navigation";



type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;


export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState<string | null>(null);
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleTranscription = async () => {
        setIsLoading(true);
        try {
            const imageAsset = await pickImage();
            if (imageAsset) {
                const result = await transcribe(imageAsset);
                navigation.navigate('Transcribed', { message: result ?? 'Nenhum retorno' });
                return;
            }
            Alert.alert("Alerta", "Não foi possível capturar a imagem selecionada. Tente novamente.")
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível transcrever a redação. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert("Permissão necessária", "Permissão para acessar a galeria é necessária");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [8, 8],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            return result.assets[0].uri;
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-vindo ao Corretor AI</Text>

                <Text style={styles.description}>
                    Este aplicativo utiliza inteligência artificial para ler e transcrever
                    suas redações manuscritas com alta fidelidade.
                </Text>

                <Text style={styles.instructions}>
                    Para começar, clique no botão "Transcrever" abaixo, verifique se a imagem está nítida e a selecione.
                </Text>
            </View>

            <View style={styles.footer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <ApiButton onPress={handleTranscription} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'space-between', // Separa o texto do botão
    },
    content: {
        marginTop: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 20,
    },
    instructions: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    footer: {
        marginBottom: 40,
        alignItems: 'center',
    },
});