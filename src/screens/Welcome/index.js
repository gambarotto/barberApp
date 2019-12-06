import React, {useState, useEffect} from 'react';
import { View, FlatList, Text, Image, Modal, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'
import FastImage from 'react-native-fast-image'

import { styles } from './styles';
import ModalStore from './ModalStore'

const ItemList = ({navigation ,propsModal, name, phone, address, picture, email, id, ativa, cnpj }) => {

    function visibleModalChangeItem() {
        //passLoadingTrue()
        const item = {
            name,
            phone,
            address,
            picture,
            email,
            id,
        }
        propsModal(item)

    }

    return (
        <TouchableOpacity
            style={styles.containerItem}
            onPress={visibleModalChangeItem}>
            <View style={styles.containerImage}>
                
                <FastImage 
                    style={styles.picture}
                    source={{
                        uri:picture,
                        priority:FastImage.priority.normal,
                        cache:FastImage.cacheControl.immutable
                    }}
                    resizeMode={FastImage.resizeMode.cover}/>
            </View>

            <View style={styles.containerInfos}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.phone}>{phone.tel1}</Text>
                <Text style={styles.address}>
                    {`${address.rua}, ${address.n} - ${address.bairro}/ ${address.cidade}`}
                </Text>
            </View>
            <View style={[styles.isActive, 
                !ativa && {backgroundColor:'#a51b0b'}]}/>

        </TouchableOpacity>
    )
}

export default function Welcome({navigation}) {
  
    const [visibleModal, setVisibleModal] = useState(false)
    const [data, setData] = useState([])
    const [propsM, setPropsM] = useState(null)

    useEffect(()=> {
        
        firebase.database().ref().child('barberInfo').once('value',snapshot => {
            const arr = []
            
            if(snapshot.val()){
                snapshot.forEach(snap => {
                    arr.push(snap.val())
                })
            }
            setData(arr)
        })
    },[])

    function goToMain(idStore){
        navigation.navigate('Main',{id: idStore} )
    }

    function visibleModalChange(bool){
        setVisibleModal(bool)
    }

    function propsModal(item){
        setPropsM(item)
    }

    useEffect(() => {
        
        propsM && setVisibleModal(true)

    },[propsM])

    return (
    <View style={styles.container}>
        <View style={styles.containerTxtTop}>
            <Text style={styles.txtTop}>ESCOLHA A BARBEARIA</Text>
        </View>
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id} 
                renderItem={({ item }) => 
                <ItemList 
                    id={item.id ? item.id : 'teste id'}
                    picture={item.imageUrl ? item.imageUrl : null}
                    name={item.nome ? item.nome : 'nome teste'}
                    phone={item.phone ? item.phone : {}}
                    address={item.address ? item.address : {}}
                    email={item.email ? item.email : 'rrrr@eeeee.com'}
                    ativa={item.ativa ? item.ativa : false}
                    cnpj={item.cnpj ? item.cnpj : '22244455577881'}
                    propsModal={propsModal}
                    navigation={navigation}
                />}/>
        </View>
        <Modal
            visible={visibleModal}
            onRequestClose={() => visibleModalChange(false)}
            transparent={true}
            animationType={'slide'}
            hardwareAccelerated={true}>
            <ModalStore 
                propsM={propsM}
                visibleModalChange={visibleModalChange}
                goToMain={goToMain}/>
        </Modal>
    </View>
  );
}
