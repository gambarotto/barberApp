import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SocialIcon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage'
import FastImage from 'react-native-fast-image'

import { styles } from './styles';

export default function ModalStore(props) {
    const colorIcons = '#e9e9e9'

    function change(bool){
        props.visibleModalChange(bool)
    }

    function saveBarber(){
        AsyncStorage.setItem('barber',props.propsM.id)
            .then(()=> {
                props.goToMain(props.propsM.id)
            }).catch(err => console.log(err))
    }

    return (
        <View style={{ flex: 1, padding: 15, justifyContent:'center', alignItems:'center' }}>
            <View style={styles.containerModal} >
                <View style={styles.containerImage}>
                    <FastImage 
                        style={{ height: '100%', width: '100%' }}
                        source={{
                            uri:props.propsM.picture,
                            priority:FastImage.priority.normal,
                            cache:FastImage.cacheControl.immutable
                        }}
                        resizeMode={FastImage.resizeMode.cover}/>
                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.txtInfo}>
                        <Icon name='account-box' size={20} color={colorIcons} />
                        <Text style={styles.infoStore}>{props.propsM.name}</Text>
                    </View>
                    <View style={styles.txtInfo}>
                        <Icon name='place' size={20} color={colorIcons} />
                        <Text style={styles.infoStore}>
                            {`${props.propsM.address.rua}, ${props.propsM.address.n} - ${props.propsM.address.bairro}/ ${props.propsM.address.cidade}`}
                        </Text>
                    </View>
                    <View style={styles.txtInfo}>
                        <Icon name='local-phone' size={20} color={colorIcons} />
                        <Text style={styles.infoStore}>{props.propsM.phone.tel1}</Text>
                    </View>
                    <View style={styles.txtInfo}>
                        <Icon name='mail' size={20} color={colorIcons} />
                        <Text style={styles.infoStore}>{props.propsM.email}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <SocialIcon name='instagram' size={25} color={colorIcons} style={styles.socialIcons}/>
                    <SocialIcon name='facebook-square' size={25} color={colorIcons} style={styles.socialIcons}/>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity 
                        onPress={() => change(false)} 
                        style={styles.containerBtnVoltar}>
                        <Icon name='chevron-left' size={20} color='#e9e9e9' />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={saveBarber} 
                        style={styles.containerBtnOk}>
                        <Icon name='check' size={24} color='#e9e9e9' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
