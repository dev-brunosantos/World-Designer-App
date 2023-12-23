import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const BtnFechar = ({ funcao }) => {
    return (
        <TouchableOpacity onPress={funcao}>
            <Ionicons
                name='close'
                size={30}
                style={{ marginHorizontal: 10 }}
            />
        </TouchableOpacity>
    )
}