import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { ProdutoCarrinho } from "../styles/ProdutosCarrinhoStyles";

export const CardProdutoCarrinho = ({
    imagem, produto, quantidade, preco, adicionar, remover
}) => {
    return (
        <TouchableOpacity style={ProdutoCarrinho.container}>
            <View style={ProdutoCarrinho.containerImagem}>
                <Image src={imagem} style={ProdutoCarrinho.imagem} />
            </View>
            <View style={ProdutoCarrinho.containerDados}>
                <Text style={ProdutoCarrinho.nome}>{produto}</Text>
                
                <View style={ProdutoCarrinho.containerBtnPreco}>
                    <View style={ProdutoCarrinho.botoes}>
                        <TouchableOpacity onPress={remover}>
                            <AntDesign name="minuscircleo" size={22} style={ProdutoCarrinho.btn} />
                        </TouchableOpacity>

                        <Text style={[ProdutoCarrinho.txt, {marginHorizontal: 10, fontSize: 26}]}>{quantidade}</Text>

                        <TouchableOpacity onPress={adicionar}>
                            <AntDesign name="pluscircleo" size={22} style={ProdutoCarrinho.btn} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={ProdutoCarrinho.txt}>R$ {preco}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}