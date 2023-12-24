import { useState } from 'react'
import { View, Image, Text } from 'react-native'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
// IMPRTAÇÃO DAS PAGINAS
import BottomTabs from './BottomTabs'
import Categorias from '../pages/Categorias'
// IMPORTAÇÃO DE ESTILOS
import { Cores } from '../styles/Cores'

const drawer = createDrawerNavigator()

export default function Drawer(props) {

    const [usuarioNome, setUsuarioNome] = useState(props.route.params.usuario)

    function Perfil() {
        return (
            <>
                <View
                    style={{
                        backgroundColor: `${Cores.azul}`,
                        height: 170,
                        justifyContent: 'space-evenly',
                        marginBottom: 40
                    }}
                >
                    <Image 
                        source={require('../../assets/logomarca.png')}
                        style={{ width: 280, height: 140 }}
                    />

                </View>
            </>
        )
    }

    return (
        <drawer.Navigator
            drawerContent={props => {
                return (
                    <>
                        <Perfil />
                        <DrawerItemList {...props} />
                    </>
                )
            }}
            screenOptions={{
                drawerLabelStyle: {
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: `${Cores.azul}`
                },
                headerTintColor: Cores.branco,
                headerStatusBarHeight: -60,
            }}
        >
            <drawer.Screen key={1}
                name='Tabs'
                component={BottomTabs}
                
                options={{
                    headerLeftContainerStyle: {
                        position: 'absolute',
                        right: 5,
                        bottom: -55
                    },
                    headerStatusBarHeight: -60,
                    title: '',
                    drawerLabel: "Home"
                }}
            />

            <drawer.Screen key={2}
                name='Categorias'
                component={Categorias}
                options={{
                    headerStyle: {
                        backgroundColor: `${Cores.amarelo}`
                    },
                    headerShown: true,
                    headerStatusBarHeight: 10,
                    headerLeftContainerStyle: {
                        position: 'absolute',
                        right: 5,
                        bottom: 14
                    },
                }}
            />
        </drawer.Navigator>
    )
}