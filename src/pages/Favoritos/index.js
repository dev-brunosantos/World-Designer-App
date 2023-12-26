import { View, ScrollView, Text } from 'react-native';
import { CardProdutoCarrinho } from '../../components/Cards/CardProdutoCarrinho';
import { PagesStyles } from '../../styles/PagesStyles';

export default function Favoritos() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={PagesStyles.page}>
                <Text style={PagesStyles.titulos}> Tela de Favoritos </Text>

                <View>
                    <CardProdutoCarrinho key={1}
                        produto="Teste 1" preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                    <CardProdutoCarrinho key={2}
                        produto="Teste 1" preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                    <CardProdutoCarrinho key={3}
                        produto="Teste 1" preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                    <CardProdutoCarrinho key={4}
                        produto="Teste 1" preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                </View>
            </View>
        </ScrollView>
    );
}
