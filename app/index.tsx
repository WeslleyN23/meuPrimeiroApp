import { Button, Text, TextInput, View } from "react-native";
import { Test } from "../components/Test";

const App = () => (
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
    <Button 
      title="Enviar"
      onPress={() => alert('Olá, Mundo!')}
      />
  </View>
)

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bem-vindo(a) ao React Native.</Text>
      <Test />
      <App />
    </View>
  );
}
