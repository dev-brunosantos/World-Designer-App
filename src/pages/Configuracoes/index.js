import { View, Text } from 'react-native';
import { PagesStyles } from '../../styles/PagesStyles'

export default function Configuracoes() {
    return (
        <View style={PagesStyles.page}>
            <Text style={PagesStyles.titulos}>
                Tela de Configurações
            </Text>
        </View>
    );
}