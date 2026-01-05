import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import TranscribedScreen from '../screens/Transcribed/Transcribed';
import { RootStackParamList } from '../types/navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerTintColor: '#000' }}>
            
            <Stack.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{ title:'Tela inicial', headerTitleAlign: 'center' }} 
            />
            
            <Stack.Screen 
                name='Transcribed' 
                component={TranscribedScreen} 
                options={{ title:'Sucesso',  headerTitleAlign: 'center' }} 
            />

        </Stack.Navigator>
    );
}