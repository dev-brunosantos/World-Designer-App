import { DrawerItemList } from '@react-navigation/drawer';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { HomeStyle } from '../styles/HomeStyles';
import { Cores } from '../styles/Cores';

export const Cabecalho = ({irParaCarrinho}) => {
    return (
        <>
            <View style={HomeStyle.cabecalho}>
                <View style={HomeStyle.containerInput}>
                    <TextInput
                        style={HomeStyle.input}
                        placeholder='Buscar Produto'
                    />
                    <TouchableOpacity onPress={() => alert('Funcinou')} style={HomeStyle.btnBuscar}>
                        <Ionicons
                            name='search-sharp'
                            size={30}
                            color={Cores.azul}
                        />
                    </TouchableOpacity>
                </View>
                <View style={HomeStyle.containerIcones}>
                    <TouchableOpacity onPress={irParaCarrinho}>
                        <Ionicons
                            name='cart-outline'
                            size={40}
                            color={Cores.branco}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}