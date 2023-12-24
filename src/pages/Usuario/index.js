import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
// IMPORTAÇÃO DE COMPONENTES
import { CardFalarConosco } from '../../components/CardFalarConosco';
import { CardPerfil } from '../../components/CardPerfil';
import { Botao } from '../../components/Botao';
// IMPORTAÇÃO DE ESTILOS E CORES
import { Cores } from '../../styles/Cores';
import { PagesStyles } from '../../styles/PagesStyles';
// IMPORTAÇÃO DE ARQUIVO JSON
import opcoes from '../../../database/perfilOpcoes.json'
import falarConosco from '../../../database/falarConosco.json'

export default function Usuario(props) {
  return (
    <>
      <View style={styles.cabecalho}>
        <View style={styles.containerUsuario}>
          <Feather name='user' size={30} color={Cores.branco} />
          <Text style={styles.usuarioNome}> Bruno Santos </Text>
        </View>
      </View>
      <ScrollView>
        <View>

          <View style={{ paddingVertical: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                opcoes.map(opcao => (
                  <CardPerfil
                    key={opcao.titulo}
                    titulo={opcao.titulo}
                    icone={opcao.icone}
                  />
                ))
              }
            </ScrollView>
          </View>

          <View style={{ alignItems: 'center', marginBottom: 15 }}>
            <Text style={[PagesStyles.titulos]}>
              Fale conosco
            </Text>
            {
              falarConosco.map(opcao => (
                <CardFalarConosco
                  key={opcao.titulo}
                  icone={opcao.icone}
                  titulo={opcao.titulo}
                  descricao={opcao.descricao}
                />
              ))
            }
          </View>

          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Botao
              titulo="Sair"
              funcao={() => props.navigation.navigate('Login')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    width: '100%',
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: Cores.azul,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingTop: 10
  },
  usuarioNome: {
    color: Cores.branco,
    fontSize: 25,
    fontWeight: 'bold',
    left: 5
  }
})