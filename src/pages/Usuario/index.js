import { View, ScrollView, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
// IMPORTAÇÃO DE COMPONENTES
import { CardFalarConosco } from '../../components/Cards/CardFalarConosco';
import { CardPerfil } from '../../components/Cards/CardPerfil';
import { Botao } from '../../components/Botoes/Botao';
// IMPORTAÇÃO DE ESTILOS E CORES
import { PagesStyles } from '../../styles/PagesStyles';
import { UsuarioStyles } from '../../styles/UsuarioStyles'
import { Cores } from '../../styles/Cores';
// IMPORTAÇÃO DE ARQUIVO JSON
import opcoes from '../../../database/perfilOpcoes.json'
import falarConosco from '../../../database/falarConosco.json'

export default function Usuario(props) {

  const nomeUsaurio = "Bruno Santos"

  return (
    <>
      <View style={UsuarioStyles.cabecalho}>
        <View style={UsuarioStyles.containerUsuario}>
          <Feather name='user' size={30} color={Cores.branco} />
          <Text style={UsuarioStyles.usuarioNome}> {nomeUsaurio} </Text>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: Cores.azul }}>
        <View>
          <View style={{ paddingVertical: 10 }}>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ borderBottomWidth: 0.8, borderColor: Cores.branco }}
            >
              {
                opcoes.map(opcao => (
                  <CardPerfil key={opcao.titulo}
                    titulo={opcao.titulo}
                    icone={opcao.icone}
                    funcao={() => {
                      if (opcao.titulo == "Meus dados") {
                        return props.navigation.navigate('Meus Dados', {usuario: nomeUsaurio})
                      }
                      if (opcao.titulo == "Favoritos") {
                        return props.navigation.navigate('Favoritos')
                      }
                      return alert(opcao.titulo)
                    }}
                  />
                ))
              }
            </ScrollView>
          </View>

          <View style={UsuarioStyles.containers}>
            <Text style={PagesStyles.titulos}> Fale conosco </Text>
            {
              falarConosco.map(opcao => (
                <CardFalarConosco key={opcao.titulo}
                  icone={opcao.icone}
                  titulo={opcao.titulo}
                  descricao={opcao.descricao}
                />
              ))
            }
          </View>

          <View style={UsuarioStyles.containers}>
            <Botao
              titulo="Sair"
              background={Cores.branco}
              funcao={() => props.navigation.navigate('Login')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
