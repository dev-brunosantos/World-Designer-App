import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { CardProdutoCarrinho } from '../../components/CardProdutoCarrinho';

export default function Favoritos() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <Text style={styles.titulo}>
                    Tela de Favoritos
                </Text>

                <View>
                    <CardProdutoCarrinho
                        produto="Teste 1"
                        preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                    <CardProdutoCarrinho
                        produto="Teste 1"
                        preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                    <CardProdutoCarrinho
                        produto="Teste 1"
                        preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                    <CardProdutoCarrinho
                        produto="Teste 1"
                        preco={22.90}
                        imagem="https://github.com/dev-brunosantos.png"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 90
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10
    }
})