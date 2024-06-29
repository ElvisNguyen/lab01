import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function Title () {
return(
    <View style={styles.container}>
        <Text style={styles.title}>Things to do</Text>
    </View>
)
}

const styles = StyleSheet.create( {
    container: {
        flex: 0.13,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingHorizontal: 20,
        paddingTop: 60,
    }
})