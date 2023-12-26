import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'
import { CardCategoria } from "../../components/Cards/CardCategoria";
import { Cores } from "../../styles/Cores";

import categoriaJson from '../../../database/categorias.json'

export default function CardTitulo({imagem, titulo}) {

    const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function Ver() {
        return (
            categoriaJson.map(categoria => (
                <CardCategoria 
                    categoria={categoria.nome}
                    imagem={categoria.img}
                    funcao={() => alert(categoria.nome)}
                />
            ))
        )
    }

    const [setaAbrir, setSetaAbrir] = useState('chevron-small-down')
    const [altura, setAltura] = useState(0)

    const abrirCategoria = () => {
        if (setaAbrir === 'chevron-small-down') {
            setSetaAbrir('chevron-small-up');
            setAltura('auto');
        } else {
            setSetaAbrir('chevron-small-down');
            setAltura(0);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={abrirCategoria}>
                <View style={styles.containerImagem}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        src={imagem}
                        // src="https://bythiti.com.br/wp-content/uploads/2023/09/IMG_8990.jpg"
                    />
                </View>
                <Text style={{ fontSize: 20 }}> {titulo} </Text>
                {/* <Text style={{ fontSize: 20 }}> Canecas </Text> */}
                <Entypo
                    name={setaAbrir} size={30}
                    style={styles.seta}
                />
            </TouchableOpacity>

            <View style={[styles.containerCategoria, {height: altura}]}>

                <Ver />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        marginTop: 20,
        marginBottom: -15
    },
    btn: {
        height: 80,
        // borderWidth: 1,
        borderRadius: 10,
        marginBottom: 2,
        padding: 5,
        flexDirection: 'row',
        alignItems: "center",
        shadowOffset: { width: 0, height: 10 },
        shadowColor: '#242424',
        shadowOpacity: 0.5,
        elevation: 5,
        backgroundColor: Cores.branco
    },
    containerImagem: {
        width: 80,
        height: '100%',
        // borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden",
        borderColor: 'green',
        marginHorizontal: 10,
    },
    seta: {
        position: 'absolute',
        right: 15
    },
    containerCategoria: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
        gap: 4,
        alignItems: "center",
        // justifyContent: "space-evenly",
        marginVertical: 10,
        // borderWidth: 1,
        overflow: "hidden",
        // padding: 5
    }
})