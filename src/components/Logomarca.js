import { View, Image } from 'react-native'
import { perfil } from '../styles/drawer/DrawerStyles'
import { DrawerItemList } from '@react-navigation/drawer'

export const Logomarca = (props) => {
    return (
        <>
            <View style={perfil.styles}>
                <Image
                    source={require('../../assets/logomarca.png')}
                    style={{ width: 280, height: 140 }}
                />
            </View>
            <DrawerItemList {...props} />
        </>
    )
}