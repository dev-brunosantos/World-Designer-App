import { View, SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { HomeStyle } from '../../styles/HomeStyles';
import { Cores } from '../../styles/Cores';
import { Cabecalho } from '../../components/Cabecalho';
import { CardCategoria } from '../../components/CardCategoria';
import { CardBanner } from '../../components/CardBanner';

import { useState } from 'react';
import categoriasJson from '../../database/categorias.json'

export default function Home(props) {

    const array = [
        'Canecas', 'Camisas', 'Bonés', 'Chaveiros',
        'Bolsa Pet', 'Canetas', 'Quebra-cabeça', 'Porta-retrato',
        'Garrafa'
    ]

    const [quantidade, setQuantidade] = useState(0)
    const add = () => {
        return (
            setQuantidade(quantidade + 1)
        )
    }
    const sub = () => {
        if (quantidade == 0) {
            return setQuantidade(0)
        }
        return (
            setQuantidade(quantidade - 1)
        )
    }

    return (
        <View style={HomeStyle.page}>
            <TouchableOpacity
                style={{
                    zIndex: 999,
                    padding: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    backgroundColor: '#fff',
                    borderRadius: 200,
                    borderWidth: 1
                }}
            >
                <Ionicons
                    name='logo-whatsapp'
                    size={30}
                    color={"green"}
                />
            </TouchableOpacity>
            <Cabecalho
                irParaCarrinho={() => {
                    return props.navigation.navigate('Carrinho de Compras')
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <View style={{ width: '100%', padding: 15 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CardCategoria categoria="Promoções" 
                            local={require('../../../assets/black.png')}
                        />
                        <CardCategoria categoria="Canecas"
                            imagem="https://bythiti.com.br/wp-content/uploads/2023/09/IMG_8990.jpg"
                        />
                        <CardCategoria categoria="Camisas"
                            imagem="https://www.lumarepersonalizados.com.br/wp-content/uploads/2021/07/2f1feefb-3ce2-4645-a45b-3d6d65fae158.jpg"
                        />
                        <CardCategoria categoria="Bonés" 
                            imagem="https://adesimais.com.br/23059-large_default/bone-personalizado-microfibra.jpg"
                        />
                        <CardCategoria categoria="Chaveiros"
                            imagem="https://d2r9epyceweg5n.cloudfront.net/stores/002/760/771/products/lembrancinhas-chaveiros-personalizados-de-casamento-chaveiros-personalizados1-8cb50dcfeb8c7f482116895377165927-1024-1024.jpg"
                        />
                        <CardCategoria categoria="Brindes" 
                            imagem="https://bruderbrindes.com.br/wp-content/uploads/2016/04/brindes-personalizados.jpg"
                        />
                    </ScrollView>
                </View> */}

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
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginVertical: 10 }}>Mais Vendidos</Text>
                    <View style={{
                        width: '100%', padding: 10, justifyContent: 'center',
                        flexDirection: 'row', alignItems: 'center',
                        flexWrap: 'wrap', gap: 5
                    }}>
                        {
                            array.map(vendidos => (
                                <CardCategoria
                                    categoria={vendidos}
                                />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}