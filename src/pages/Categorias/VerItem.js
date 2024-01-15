import { CardCategoria } from '../../components/Cards/CardCategoria'
import categoriaJson from '../../../database/categorias.json'

export default function Ver(props) {
    return (
        categoriaJson.map(categoria => (
            <CardCategoria
                key={ categoria.nome}
                categoria={categoria.nome}
                imagem={categoria.img}
                // funcao={() => alert(categoria.nome)}
                funcao={() => props.navigation.navigate('Home')}
            />
        ))
    )
}