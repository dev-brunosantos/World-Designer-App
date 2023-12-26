import { StyleSheet } from "react-native";
import { Cores } from "../Cores";

export const BottomTabsOptions = StyleSheet.create({
    rodape: {
        color: Cores.branco,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    rodapeCor: {
        backgroundColor: Cores.azul,
        height: 60
    },
})