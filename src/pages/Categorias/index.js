import { View, Text, ScrollView } from 'react-native';
import CardTitulo from './CardTitulo';

import categoriasJson from '../../../database/categorias.json'

export default function Categorias() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', alignItems: 'center' }}>
          {/* <CardTitulo 
            imagem="https://bythiti.com.br/wp-content/uploads/2023/09/IMG_8990.jpg"
            titulo="Canecas"
          />
          <CardTitulo 
            imagem="https://www.lumarepersonalizados.com.br/wp-content/uploads/2021/07/2f1feefb-3ce2-4645-a45b-3d6d65fae158.jpg"
            titulo="Camisas"
          />
          <CardTitulo 
            imagem="https://d2r9epyceweg5n.cloudfront.net/stores/002/760/771/products/lembrancinhas-chaveiros-personalizados-de-casamento-chaveiros-personalizados1-8cb50dcfeb8c7f482116895377165927-1024-1024.jpg"
            titulo="Chaveiros"
          /> */}

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