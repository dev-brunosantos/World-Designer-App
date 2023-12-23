import { View, TouchableOpacity, Text, Image, Button } from "react-native";

export const CardProduto = ({nome, preco, funcao, addCarrinho}) => {
    return(
        <View>
            <TouchableOpacity onPress={funcao}>
                <Text>{nome}</Text>
                <Text>R$ {preco}</Text>
            </TouchableOpacity>
            <Button 
                title="Adicionar ao carrinho"  
                onPress={addCarrinho}
            />
        </View>
    )
}