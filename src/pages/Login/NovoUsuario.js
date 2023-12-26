import { useState } from 'react';
import { View, Image } from 'react-native';
import { Input, Senha } from '../../components/Inputs'
// IMPORTAÇÃO DE ESTILOS E CORES
import { PagesStyles } from '../../styles/PagesStyles';
import { Cores } from '../../styles/Cores';
import { Botao } from '../../components/Botoes/Botao';

export default function NovoUsuario(props) {

    const [usuarioNome, setUsuarioNome] = useState('')
    const [usuarioSenha, setUsuarioSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const validarNovoUsuario = () => {
        if(usuarioSenha == confirmarSenha) {
            alert(`O usuário ${usuarioNome} foi criado com sucesso. Por Favor realizar o login.`)
            return props.navigation.navigate('Login')
        }
        return alert('Dados incorretos')
    }

    return (
        <View style={[PagesStyles.page, { backgroundColor: Cores.azul }]}>
            <Image
                source={require('../../../assets/logomarca.png')}
                style={{ width: '70%', height: 140, marginTop: 0 }}
            />
            <Input
                placeholder="Digite seu Nome ou e-mail"
                valor={usuarioNome}
                borderColor={Cores.branco}
                txtColor={Cores.branco}
                background={'#fafafa60'}
                pegaDados={(txt) => setUsuarioNome(txt)}
            />
            <Senha
                placeholder="Digite sua senha"
                valor={usuarioSenha}
                borderColor={Cores.branco}
                txtColor={Cores.branco}
                background={'#fafafa60'}
                pegaDados={(txt) => setUsuarioSenha(txt)}
            />
            <Senha
                placeholder="Confirmar senha"
                valor={confirmarSenha}
                borderColor={Cores.branco}
                txtColor={Cores.branco}
                background={'#fafafa60'}
                pegaDados={(txt) => setConfirmarSenha(txt)}
            />
            <Botao
                titulo="Cadastrar"
                txtColor={Cores.branco}
                borderColor={Cores.branco}
                funcao={validarNovoUsuario}
            />
        </View>
    );
}