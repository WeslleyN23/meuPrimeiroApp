import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import * as Location from 'expo-location';

export default function Localizacao(){
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    (async () => {
        //solicita permissão de localização
        const {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){
            Alert.alert(
                'Permissão negada!',
                'Permissão de localização é necessária para exibir os dados.',
            );
            setLoading(false);
            return;
        }
        //Obtém a localização atual
        try{
            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);

        }catch(error){
            Alert.alert('Erro, Não foi possível obeter a localização');
        }finally{
            setLoading(false);
        }
    })();
}, []);

        return(
            <View style={styles.container}>
                {loading ? (
                    <ActivityIndicator size='large' color='#0000ff' />
                ) : location ? (
                    <View>
                        <Text style={styles.text}>Latitude: {location.latitude.toFixed(4)}</Text>                        
                        <Text style={styles.text}>Longitude: {location.longitude.toFixed(4)}</Text>                        
                    </View>
                ) : (
                    <Text style={styles.text}>Localização não disponível</Text>
                )}
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        text: {
            fontSize: 18,
            marginVertical: 5,
        },
    });