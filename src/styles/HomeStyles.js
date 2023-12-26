import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fafafa',
        zIndex: 999
    },
    cabecalho: {
        width: '100%',
        height: 66,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: 'rgb(0,200,255)',
        top: 2,
    },
    containerInput: {
        backgroundColor: '#fff',
        width: '65%',
        height: '90%',
        borderRadius: 5,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: "center",
        position: "relative",
    },
    input: {
        width: '82%',
        height: '100%',
        position: 'absolute',
        paddingLeft: 20,
        fontSize: 18,
        zIndex: 999
    },
    btnBuscar: {
        position: 'absolute',
        right: 10,
        zIndex: 999
    },
    containerIcones: {
        width: '25%',
        height: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative"
    },
    maisVendidos: {
        width: '100%', 
        padding: 10, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})