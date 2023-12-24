import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
// IMPORTAÇÃO DE CORES
import { Cores } from "../styles/Cores";

export const CardPerfil = ({titulo, icone}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.containerIcone}>
                <Feather name={icone} size={40} />
            </View>
            <Text style={styles.texto}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 115,
        height: 115,
        marginHorizontal: 10,
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "center" 
    },
    containerIcone: {
        width: '60%',
        height: '60%',
        borderWidth: 1,
        // borderColor: Cores.azul,
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        // color: Cores.azul,
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5
    }
})