import { createDrawerNavigator } from '@react-navigation/drawer'
// IMPRTAÇÃO DAS PAGINAS
import BottomTabs from './BottomTabs'
import Categorias from '../pages/Categorias'
// IMPORTAÇÃO DE ESTILOS
import { DrawerOptionsStyles, TabsStyles, CategoriasStyles } from '../styles/drawer/DrawerStyles'
import { Logomarca } from '../components/Logomarca'
import Configuracoes from '../pages/Configuracoes'

const drawer = createDrawerNavigator()

export default function Drawer(props) {

    return (
        <drawer.Navigator
            drawerContent={props => <Logomarca {...props} />}
            screenOptions={{
                headerStatusBarHeight: DrawerOptionsStyles.cabecalho,
                drawerLabelStyle: DrawerOptionsStyles.LabelStyle,
                headerTintColor: DrawerOptionsStyles.txtColor,
            }}
        >
            <drawer.Screen key={1}
                name='Tabs'
                component={BottomTabs}
                options={{
                    headerLeftContainerStyle: TabsStyles.menuBar,
                    headerStatusBarHeight: TabsStyles.cabecalho,
                    title: '', drawerLabel: "Home"
                }}
            />
            <drawer.Screen key={2}
                name='Categorias'
                component={Categorias}
                options={{
                    headerStatusBarHeight: CategoriasStyles.cabecalho,
                    headerStyle: CategoriasStyles.cabecalhoCor,
                    headerLeftContainerStyle: CategoriasStyles.menuBar,
                    headerShown: true,
                }}
            />
            <drawer.Screen 
                name='Configurações'
                component={Configuracoes}
                options={{
                    headerStatusBarHeight: CategoriasStyles.cabecalho,
                    headerStyle: CategoriasStyles.cabecalhoCor,
                    headerLeftContainerStyle: CategoriasStyles.menuBar,
                    headerShown: true,
                }}
            />

        </drawer.Navigator>
    )
}