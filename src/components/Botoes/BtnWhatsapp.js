import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export const BtnWhatsapp = () => {
    return (
        <TouchableOpacity
            style={styles.btnZap} >
            <Ionicons
                name='logo-whatsapp'
                size={30}
                color={"green"}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnZap: {
        zIndex: 999,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#FFF',
        borderRadius: 200,
        borderWidth: 1
    }
})