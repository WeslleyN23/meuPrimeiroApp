import { StyleSheet, View } from "react-native";

const Test = () => (
    <View style={styles.container} >
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box1: {width: 50, height: 50, backgroundColor: 'red'},
    box2: {width: 50, height: 50, backgroundColor: 'red'},
    box3: {width: 50, height: 50, backgroundColor: 'red'},
});

export default Test;
