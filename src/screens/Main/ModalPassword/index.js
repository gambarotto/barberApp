import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles';

export default function ModalPassword({ handleModals, newTickets }) {
  
  const [inputPass, setInputPass] = useState('')

  function buttonOk (){
    if(inputPass === '12345'){
      
      handleModals('password', false)
      newTickets()
    }
  }

  function handleModal(modal,bool){
    handleModals(modal,bool)
  }

  function handleInput(text){
    setInputPass(text)
  }

  return (
    <View style={styles.containerModal}>
        <View style={styles.container}>
            <View style={styles.containerHeather}>
              <Text style={styles.txtHeader}>Senha do logista</Text>
            </View>
            <View style={styles.containerContent}>
              <TextInput 
                style={styles.inputPassword}
                placeholder='Senha...'
                autoCapitalize='none'
                autoCompleteType='off'
                autoFocus={true}
                secureTextEntry={true}
                onChangeText={text => handleInput(text)}
                value={inputPass}
                />
            </View>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                onPress={() => handleModal('password', false)} 
                style={styles.buttons}>
                <Icon name='do-not-disturb' size={20} color='#111'/>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={buttonOk}
                style={styles.buttons}>
                <Icon name='done' size={20} color='#111'/>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}
