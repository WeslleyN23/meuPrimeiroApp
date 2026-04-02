import { StyleSheet, View, Image } from "react-native";

export const Test = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/dog.jpg')}
        style={styles.image}
        resizeMode="contain" // mantém proporção dentro do espaço
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 400,
    height: 300,              // define altura fixa
    borderRadius: 10,         // arredonda cantos
  },
});

export default Test;

