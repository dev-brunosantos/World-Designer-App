import { StyleSheet } from "react-native";
import { Cores } from "../Cores";

export const perfil = StyleSheet.create({
    styles: {
        backgroundColor: `${Cores.azul}`,
        height: 170,
        justifyContent: 'space-evenly',
        marginBottom: 40
    }
})

export const DrawerOptionsStyles = StyleSheet.create({
    LabelStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: `${Cores.azul}`
    },
    txtColor: Cores.branco,
    cabecalho: -60,
})

export const TabsStyles = StyleSheet.create({
    menuBar: {
        position: 'absolute',
        right: 5,
        bottom: -55
    },
    cabecalho: -60,
})

export const CategoriasStyles = StyleSheet.create({
    cabecalhoCor: {
        backgroundColor: `${Cores.amarelo}`
    },
    cabecalho: 10,
    menuBar: {
        position: 'absolute',
        right: 5,
        bottom: 14
    },
})