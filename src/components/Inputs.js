import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'

export const Input = ({
    placeholder, txtColor, borderColor, background, pegaDados, valor
}) => {
    return (
        <View style={[
            styles.container, 
            { borderColor: borderColor, backgroundColor: background }
        ]}>
            <TextInput 
                placeholder={placeholder}
                value={valor}
                onChangeText={pegaDados}
                style={[styles.input, { color: txtColor }]}
            />
        </View>
    )
}

export const Senha = ({
    placeholder, txtColor, borderColor, background, pegaDados,valor
}) => {

    const [seguranca, setSeguranca] = useState(true)
    const [verSenha, setVersenha] = useState('eye')
    const [naoVerSenha, setNaoVerSenha] = useState('eye-with-line')

    const verificarSenha = () => {
        setSeguranca(!seguranca)
        setVersenha(naoVerSenha)
        setNaoVerSenha(verSenha)
    }

    return (
        <View style={[
            styles.container, 
            { borderColor: borderColor, backgroundColor: background }
        ]}>
            <TextInput 
                placeholder={placeholder}
                secureTextEntry={seguranca}
                value={valor}
                onChangeText={pegaDados}
                style={[styles.input, { color: txtColor }]}
            />
            <TouchableOpacity style={styles.btnVerSenha} onPress={verificarSenha}>
                <Entypo name={naoVerSenha} size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 70,
        // borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        shadowOffset: {width: 0, height: 10},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 5,
        marginVertical: 10
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20, 
        position: 'absolute',
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    },
    btnVerSenha: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 10,
        zIndex: 999
    }
})