import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Cores } from "../styles/Cores";

export const CardCategoria = ({ imagem, local, categoria, funcao }) => {
    return (
        <TouchableOpacity
            onPress={funcao}
            style={{
                width: 100,
                height: 100,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 10,
                backgroundColor: `${Cores.azul}`,
                alignItems: "center",
                justifyContent: "space-evenly",
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <View style={styles.containerImg}>
                <Image source={local} src={imagem} style={styles.img} />
            </View>
            {/* <Text style={styles.txt}> {categoria} </Text> */}

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerImg: {
        width: '100%',
        height: '100%'
    },
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    txt: {
        color: '#000', 
        fontSize: 16, 
        fontWeight: "bold", 
        position: 'absolute', 
        bottom: 0,
        zIndex: 999

    }
})