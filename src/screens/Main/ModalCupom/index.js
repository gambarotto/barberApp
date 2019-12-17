import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function ModalCupom({handleModals, useCupons}) {
  
  function buttonOk(){
    useCupons()
    handleModals('cupom',false)

  }

  function closeModal(){
    handleModals('cupom',false)
  }

  return (
    <View style={styles.containerModal}>
      <View style={styles.container}>
        <View style={styles.heather}>
          <Text style={styles.txtHeather}>CUPOM</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.txtContent}>Você deseja utilizar um cupom?</Text>
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={closeModal}>
            <Text style={styles.txtBtn}>NÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn}
            onPress={buttonOk}>
            <Text style={styles.txtBtn}>SIM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
