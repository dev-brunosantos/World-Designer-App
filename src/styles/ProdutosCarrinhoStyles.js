import { StyleSheet } from "react-native";
import { Cores } from "./Cores";

export const ProdutoCarrinho = StyleSheet.create({
    container: {
        width: '80%',
        height: 110,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
        flexDirection: 'row', 
        backgroundColor: `${Cores.azul}`
    },
    containerImagem: {
        width: '30%',
        borderWidth: 1,
        position: "relative",
        borderRadius: 5
    },
    imagem: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    containerDados: {
        width: '68%',
        paddingHorizontal: 10,
    },
    nome: {
        height: '48%',
        paddingVertical: 10,
        color: `${Cores.branco}`,
        fontSize: 22,
        fontWeight: "bold"
    },
    containerBtnPreco: {
        height: '48%',
        flexDirection: 'row',
        alignItems: "center", 
        justifyContent: "space-between"
    },
    botoes: {
        flexDirection: "row",
        alignItems: "center"
    },
    btn: {
        color: `${Cores.branco}`,
    },
    txt: {
        color: `${Cores.branco}`,
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 5
    }
})