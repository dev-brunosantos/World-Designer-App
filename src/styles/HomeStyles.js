import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "space-evenly"
        // paddingTop: -20,
        backgroundColor: '#fafafa',
        zIndex: 999
    },
    cabecalho: {
        width: '100%',
        height: 66,
        // borderWidth: 1,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: 'rgb(0,200,255)',
        // marginTop: 60,
        // position: 'absolute',
        top: 2,
        // zIndex: 999
    },
    containerInput: {
        backgroundColor: '#fff',
        width: '65%',
        height: '90%',
        borderRadius: 5,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent: "center",
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
    }
})