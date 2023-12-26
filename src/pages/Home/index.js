import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
// IMPORTAÇÃO DE COMPONENTES
import { BtnWhatsapp } from '../../components/Botoes/BtnWhatsapp';
import { Cabecalho } from '../../components/Cabecalho';
import { CardCategoria } from '../../components/Cards/CardCategoria';
import { CardBanner } from '../../components/Cards/CardBanner';
// IMPORTAÇÃO DE ESTILOS E CORES
import { PagesStyles } from '../../styles/PagesStyles';
import { HomeStyle } from '../../styles/HomeStyles';
import { Cores } from '../../styles/Cores';
// IMPORTAÇÃO DE ARQUIVOS JSON
import categoriasJson from '../../../database/categorias.json'

export default function Home(props) {

    const array = [
        'Canecas', 'Camisas', 'Bonés', 'Chaveiros', 'Bolsa Pet', 
        'Canetas', 'Quebra-cabeça', 'Porta-retrato','Garrafa'
    ]

    const [quantidade, setQuantidade] = useState(0)
    const add = () => {
        return setQuantidade(quantidade + 1)
    }
    const sub = () => {
        if (quantidade == 0) { return setQuantidade(0) }
        return setQuantidade(quantidade - 1) 
    }

    return (
        <View style={HomeStyle.page}>
            <BtnWhatsapp />
            <Cabecalho
                irParaCarrinho={() => {
                    return props.navigation.navigate('Carrinho de Compras')
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '100%', padding: 15 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            categoriasJson.map(categoria => (
                                <CardCategoria categoria={categoria.nome} imagem={categoria.img} />
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={{ width: '100%', height: 400, backgroundColor: Cores.azul }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CardBanner fundoCor={Cores.azul}
                            imagem="https://bythiti.com.br/wp-content/uploads/2023/09/IMG_8990.jpg"
                        />
                        <CardBanner fundoCor={Cores.rosa}
                            imagem="https://www.lumarepersonalizados.com.br/wp-content/uploads/2021/07/2f1feefb-3ce2-4645-a45b-3d6d65fae158.jpg"
                        />
                        <CardBanner fundoCor={Cores.amarelo}
                            imagem="https://d2r9epyceweg5n.cloudfront.net/stores/002/760/771/products/lembrancinhas-chaveiros-personalizados-de-casamento-chaveiros-personalizados1-8cb50dcfeb8c7f482116895377165927-1024-1024.jpg"
                        />
                    </ScrollView>
                </View>

                <View>
                    <Text style={PagesStyles.titulos}>Mais Vendidos</Text>
                    <View style={HomeStyle.maisVendidos}>
                        {
                            array.map(vendidos => (
                                <CardCategoria categoria={vendidos} />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}