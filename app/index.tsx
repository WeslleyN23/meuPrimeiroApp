
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { Test } from "../components/Test";
import { useFonts } from "expo-font";

const App = () => (

  <>
  <View>
    <TextInput 
      placeholder="Digite o seu nome"
      style={{
        borderWidth: 2, 
        borderColor: 'gray',
        padding: 15,
        marginBottom: 10,
        textAlign: 'center'
      }}
    />
  </View>
  <View>
    <Button 
      title="Enviar"
      onPress={() => alert('Olá, Mundo!')}
      />
  </View>
  </>
)

export default function Index() {
   const [fontsLoaded] = useFonts({
        'CustomFont': require('../assets/fonts/MinhaFonte.ttf'),
    });

    if (!fontsLoaded) {
        return <View><Text>Carregando...</Text></View>
    }

    const styles = StyleSheet.create({
      container: {
          flex: 1, // Faz o componente ocupar toda a tela
          justifyContent: 'center', // Centraliza verticalmente
          alignItems: 'center', // Centraliza horizontalmente
          backgroundColor: '#f0f0f0', // Cor de fundo clara para destaque
      },
      text: {
          fontFamily: 'CustomFont',
          fontSize: 60, // Aumenta o tamanho da fonte
          color: '#333', // Define uma cor para o texto
      },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text 
        style={styles.text}>Bem-vindo(a) ao React Native.</Text>
      <Test />
      <App />
    </View>
  );
}

