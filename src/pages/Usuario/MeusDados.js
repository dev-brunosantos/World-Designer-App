import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Input } from '../../components/Inputs'
import { Botao } from "../../components/Botoes/Botao";
import { Picker } from '@react-native-picker/picker'
import { Cores } from "../../styles/Cores";
import { PagesStyles } from "../../styles/PagesStyles";

export default function MeusDados(props) {
    
    const placeholdes = ['Nome', 'Telefone', 'E-mail', 'CPF']
    
    const nome = props.route.params.usuario 
    const [genero, setGenero] = useState()


    return (
        <View style={[PagesStyles.page, {backgroundColor: Cores.azul}]}>
            {
                placeholdes.map(inputs => (
                    <>
                        <Input
                            placeholder={inputs}
                            valor={
                                inputs === 'Nome' ? nome : inputs
                            }
                            background={Cores.branco}
                            borderColor={Cores.azul}
                        />
                    </>
                ))
            }

            <Picker
                selectedValue={genero}
                onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
                style={styles.select}
            >
                <Picker.Item label="Gênero" value="" color="#242424a2" style={styles.label} />
                <Picker.Item label="Masculino" value="Masculino" color="#000" style={styles.label} />
                <Picker.Item label="Feminino" value="Feminino" color="#000" style={styles.label} />
                <Picker.Item label="Prefiro não responder" value="Prefiro não responder" color="#000" style={styles.label} />
            </Picker>

            <View style={styles.botoes}>
                <Botao titulo="Salvar informações" background={Cores.branco}/>
                <Botao titulo="Alterar senha" background={Cores.branco}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        width: '90%',
        height: 70,
        borderRadius: 20,
        backgroundColor: Cores.branco,
        shadowOffset: { width: 0, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 5,
    },
    label: {
        fontSize: 20
    },
    botoes: {
        width: '90%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    }
})