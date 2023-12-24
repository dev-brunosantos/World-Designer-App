import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Fontisto } from '@expo/vector-icons'

export const CardFalarConosco = ({ icone, titulo, descricao }) => {
    return (
        <TouchableOpacity style={styles.containte}>
            <View style={styles.containerIcone}>
                <Fontisto name={icone} size={70} />
            </View>
            <View style={styles.containerTexto}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containte: {
        width: '85%',
        height: 100,
        // borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fafafa',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5
    },
    containerIcone: {
        width: '30%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1
    },
    containerTexto: {
        width: '70%',
        height: '100%',
        //borderWidth: 1,
        borderColor: 'red',
        justifyContent: "center"
    },
    titulo: {
        fontSize: 20
    },
    descricao: {
        maxWidth: "95%",
        fontSize: 15
    }
})