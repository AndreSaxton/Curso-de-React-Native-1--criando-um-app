import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat'

import Cesta from './src/telas/Cesta/';
import mock from './src/mocks/cesta';

export default function App() {

  //Tenta carregar as fontes utilizadas.
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada){
    // Quando não tiver fonte carregada exibe tela em branco
    return <View />
  }

  // Carregando aplicação
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
