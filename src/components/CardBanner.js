import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export const CardBanner = ({ imagem, funcao, fundoCor, txt }) => {
    return (
        <View style={{
            width: 420,
            height: '100%',
            backgroundColor: fundoCor
        }}>
            <TouchableOpacity
                onPress={funcao}
                style={{
                    width: '100%',
                    height: '100%',
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Image src={imagem} style={styles.img} />
                {/* <Text style={{fontSize: 30}}>BANNER: {txt}</Text> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
})