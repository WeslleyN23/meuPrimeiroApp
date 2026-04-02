import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'MinhaFonte': require('../assets/fonts/MinhaFonte.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou uma tela de loading
  }
  
  return (
    <Stack 
      screenOptions={{
        headerTitle: "IGNIS TECH",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Verdana",
          fontSize: 30,
          color: "#000000",
          //fontWeight: "bold",
        },
        
      }}/>
    )
}
