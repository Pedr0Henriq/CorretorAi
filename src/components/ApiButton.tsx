import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ApiButtonProps {
    onPress: (event: GestureResponderEvent) => void;
}

export default function ApiButton({ onPress }: ApiButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={style.background}>
                <Text style={style.text}>Transcrever</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    background: {
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
});