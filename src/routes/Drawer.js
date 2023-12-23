import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import { Cabecalho } from '../components/Cabecalho'

import { Cores } from '../styles/Cores'
import BottomTabs from './BottomTabs'
import Categorias from '../pages/Categorias'

const drawer = createDrawerNavigator()

export default function Drawer(props) {
    function Perfil() {
        return (
            <>
                <View
                    style={{
                        backgroundColor: `${Cores.azul}`,
                        height: 170,
                        justifyContent: 'space-evenly',
                        // marginTop: 63,
                        // marginTop: '1%',
                        // paddingTop: 60,
                        paddingHorizontal: 20,
                        marginBottom: 40,
                        // borderWidth: 1,
                    }}
                >
                    <Text style={{fontWeight: 'bold', fontSize: 22}}>Olá, Bruno Santos</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >

                        <TouchableOpacity 
                            style={{
                                width: '45%',
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center' 
                            }}
                        >
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Perfil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{
                                width: '45%',
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center' 
                            }}
                        >
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                                Pedidos
                            </Text>
                        </TouchableOpacity>

                    </View>
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
            <drawer.Screen
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

            <drawer.Screen   
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