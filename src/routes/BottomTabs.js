import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// IMPORTAÇÃO DE PAGINAS
import Home from '../pages/Home'
import Favoritos from '../pages/Favoritos'

const tabs = createBottomTabNavigator()

import { icones } from '../pages/Favoritos/Icones'
import Usuario from '../pages/Usuario'

import { BottomTabsOptions } from '../styles/bottomTabs/BottomTabsStyles'

const criarIcone = (icone) => { return icone }

export default function BottomTabs(props) {
    return (
        <tabs.Navigator
            screenOptions={{
                tabBarLabelStyle: BottomTabsOptions.rodape,
                tabBarStyle: BottomTabsOptions.rodapeCor,
                headerShown: false,
            }}
        >
            <tabs.Screen key={1}
                name='Home' component={Home}
                options={{
                    tabBarIcon: (() => { return criarIcone(icones.home) })
                }}
            />
            <tabs.Screen key={2}
                name='Favoritos' component={Favoritos}
                options={{
                    tabBarIcon: (() => { return criarIcone(icones.favoritos) })
                }}
            />
            <tabs.Screen key={3}
                name='Perfil' component={Usuario}
                options={{
                    headerShown: false,
                    tabBarIcon: (() => { return criarIcone(icones.usuario) })
                }}
            />
        </tabs.Navigator>
    )
}