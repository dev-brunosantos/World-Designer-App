import { View, Text, ScrollView } from 'react-native';
import CardTitulo from './CardTitulo';

import categoriasJson from '../../../database/categorias.json'
import { Cores } from '../../styles/Cores';

export default function Categorias(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 30 }}>
          {
            categoriasJson.map(categoria => (
              <CardTitulo 
                 imagem={categoria.img}
                 titulo={categoria.nome}
              />
            ))
          }

        </View>
      </ScrollView>
    </View>
  );
}