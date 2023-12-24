import { useState } from "react";
import { View, Text } from "react-native";
import { CardProdutoCarrinho } from "../../components/CardProdutoCarrinho";

export default function Carrinho() {
    const [quantidade, setQuantidade] = useState(1)
    const [preco, setPreco] = useState(50.25)

    const precoAntigo = 50.25
    const add = () => {
        return (
            setQuantidade(quantidade + 1),
            setPreco(preco+precoAntigo)
            )
        }
        const sub = () => {
            if (quantidade == 0) {
                return setQuantidade(0)
            }
            return (
                setQuantidade(quantidade - 1),
                setPreco(preco-precoAntigo)
        )
    }

    return (
        <View>
            <Text style={{
                fontSize: 25, fontWeight: "bold",
                marginVertical: '4%', marginHorizontal: '8%'
            }}>Total de Produtos ({quantidade})</Text>

            <View style={{
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <CardProdutoCarrinho
                    produto="Caneca Magica"
                    quantidade={quantidade}
                    preco={preco}
                    imagem="https://github.com/dev-brunosantos.png"
                    remover={sub}
                    adicionar={add}
                />
            </View>
        </View>
    )
}
