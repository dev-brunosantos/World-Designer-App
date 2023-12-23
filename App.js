import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import Home from './src/pages/Home';
// export default function App() {
//   return (
//       <>
//       <StatusBar style="auto" />
//       <Home />  
//       </>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Drawer from './src/routes/Drawer'
import { Cores } from './src/styles/Cores';
import Carrinho from './src/pages/Carrinho';
import { BtnFechar } from './src/components/BtnFechar';
import { View } from 'react-native';

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
          <stack.Screen
            name='Drawer'
            component={Drawer}
            options={{ 
              headerShown: false,
              // headerTransparent: true,
              title: ''
             }}
          />

          <stack.Screen 
            name='Carrinho de Compras'
            component={Carrinho}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  )
}