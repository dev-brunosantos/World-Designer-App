import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// IMPORTAÇÃO DE PAGINAS
import Login from './src/pages/Login';
import NovoUsuario from './src/pages/Login/NovoUsuario';
import Drawer from './src/routes/Drawer'
import Carrinho from './src/pages/Carrinho';
// IMPORTAÇÃO DE COMPONENTES
import { BtnFechar } from './src/components/Botoes/BtnFechar';
// IMPORTAÇÃO DE ESTILOS E CORES
import { Cores } from './src/styles/Cores';

const stack = createStackNavigator()

export default function App(props) {

  const teste = () => {
    return props.navigation.navigate('Drawer')
  }

  return (
    <>
      <StatusBar style='light' backgroundColor={Cores.amarelo} translucent={true} hidden={true} />
      {/* <StatusBar  translucent={true}/> */}
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen key={1}
            name='Login'
            component={Login}
            options={{ headerShown: false }}
            />

          <stack.Screen key={2}
            name='Novo Usuário'
            component={NovoUsuario}
            options={{ headerShown: false }}
          />

          <stack.Screen key={3}
            name='Drawer'
            component={Drawer}
            options={{ headerShown: false, title: '' }}
          />

          <stack.Screen key={4}
            name='Carrinho de Compras'
            component={Carrinho}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  )
}