import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
// IMPORTAÇÃO DE CORES
import { Cores } from "../../styles/Cores";

export const CardPerfil = ({titulo, icone, funcao}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={funcao}>
            <View style={styles.containerIcone}>
                <Feather name={icone} size={40} color={Cores.branco}/>
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
        alignItems: "center",
        justifyContent: "center" 
    },
    containerIcone: {
        width: '60%',
        height: '60%',
        borderWidth: 2,
        borderColor: Cores.branco,
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        color: Cores.branco,
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5
    }
})