import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { RootStackParamList } from '@/src/types/navigation';
import { RouteProp } from '@react-navigation/native';

type TranscribedRouteProp = RouteProp<
  RootStackParamList,
  'Transcribed'
>;

interface Props {
  route: TranscribedRouteProp;
}


export default function TranscribedScreen({ route }: Props) {
    const navigation = useNavigation();
    const transcription = route.params.message; 
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await Clipboard.setStringAsync(transcription);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (err) {
            Alert.alert("Erro", "Não foi possível copiar o texto.");
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Redação Transcrita</Text>
                <Text style={styles.subtitle}>Confira o resultado abaixo</Text>
            </View>
            <View style={styles.paperContainer}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.transcriptionText} selectable={true}>
                        {transcription}
                    </Text>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={[styles.button, isCopied ? styles.buttonSuccess : styles.buttonPrimary]} 
                    onPress={handleCopy}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>
                        {isCopied ? "Copiado! ✓" : "Copiar Texto"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.secondaryButton} 
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.secondaryButtonText}>Ler outra redação</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    paperContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 5,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#e1e1e1',
    },
    scrollContent: {
        padding: 20,
    },
    transcriptionText: {
        fontSize: 16,
        lineHeight: 26,
        color: '#333',
        textAlign: 'justify',
        fontFamily: 'System',
        paddingHorizontal: 16
    },
    footer: {
        gap: 12,
    },
    button: {
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPrimary: {
        backgroundColor: '#007AFF',
    },
    buttonSuccess: {
        backgroundColor: '#34C759',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryButton: {
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    secondaryButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '500',
    }
});