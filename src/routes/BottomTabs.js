import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import { Cores } from '../styles/Cores'
import Favoritos from '../pages/Favoritos'

const tabs = createBottomTabNavigator()

import { icones } from '../pages/Favoritos/Icones'
import Usuario from '../pages/Usuario'

const criarIcone = (icone) => {
    return icone 
}

export default function BottomTabs() {
    return (
        <tabs.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Cores.azul,
                    height: 60
                },
                headerShown: false,
                tabBarLabelStyle: {
                    color: Cores.branco,
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                },
            }}
        >
            <tabs.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: (() => { return criarIcone(icones.home) })
                }}
            />

            <tabs.Screen
                name='Favoritos'
                component={Favoritos}
                options={{
                    tabBarIcon: (() => { return criarIcone(icones.favoritos) })
                }}
            />

            <tabs.Screen 
                name='Perfil'
                component={Usuario}
                options={{
                    tabBarIcon: (() => { return criarIcone(icones.usuario) })
                }}
            />
        </tabs.Navigator>
    )
}