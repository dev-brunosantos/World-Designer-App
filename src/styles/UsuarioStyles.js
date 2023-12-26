import { StyleSheet } from "react-native";
import { Cores } from "./Cores";

export const UsuarioStyles = StyleSheet.create({
    cabecalho: {
        width: '100%',
        height: 70,
        paddingHorizontal: 20,
        backgroundColor: Cores.azul,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      containerUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        paddingTop: 10
      },
      usuarioNome: {
        color: Cores.branco,
        fontSize: 25,
        fontWeight: 'bold',
        left: 5
      },
      containers: {
        alignItems: 'center', 
        marginBottom: 20
      }
})