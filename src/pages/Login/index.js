import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Input, Senha } from '../../components/Inputs'

// IMPORTAÇÃO DE ESTILOS E CORES
import { PagesStyles } from '../../styles/PagesStyles';
import { Cores } from '../../styles/Cores';
import { Botao } from '../../components/Botao';

export default function Login(props) {
    
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const logar = () => {
        // DEPOIS DEVE SER CRIADO UM ARMAZENAMENTO LOCAL PARA GUARDAR USUARIO E SENHA
        return (
            props.navigation.navigate('Drawer', { usuario: usuario }),
            setUsuario(''), setSenha('')
        )
    }

    return (
        <View style={[PagesStyles.page, { backgroundColor: Cores.azul }]}>
            <Image
                source={require('../../../assets/logomarca.png')}
                style={{
                    width: '80%',
                    height: 150,
                    marginTop: -30
                }}
            />

            <Text style={[PagesStyles.titulos, { color: Cores.branco }]}>Usuário</Text>
            <Input
                placeholder="Nome ou e-mail do usuário"
                valor={usuario}
                borderColor={Cores.branco}
                txtColor={Cores.branco}
                background={'#fafafa60'}
                pegaDados={(txt) => setUsuario(txt)}
            />

            <Text style={[PagesStyles.titulos, { color: Cores.branco }]}>Senha</Text>
            <Senha
                placeholder="Digite sua senha"
                valor={senha}
                borderColor={Cores.branco}
                txtColor={Cores.branco}
                background={'#fafafa60'}
                pegaDados={(txt) => setSenha(txt)}
            />

            <Botao
                titulo="Entrar"
                funcao={logar}
                txtColor={Cores.branco}
                borderColor={Cores.branco}
            />

            <TouchableOpacity onPress={() => props.navigation.navigate('Novo Usuário')}>
                <Text style={{ color: Cores.branco, fontSize: 20, fontWeight: 'bold' }}>
                    Novo Usuário
                </Text>
            </TouchableOpacity>
        </View>
    );
}