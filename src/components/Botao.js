import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const Botao = ({titulo, txtColor, borderColor, funcao, bacoground}) => {
    return(
        <TouchableOpacity
            onPress={funcao}
            style={[
                style.btn,
                { borderColor: borderColor }
            ]}
        >
            <Text
                style={[
                    style.txt,
                    { color: txtColor }
                ]}
            >
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btn: {
        maxWidth: 200,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    }
})