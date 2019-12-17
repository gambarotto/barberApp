import React, { useState, useEffect } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'react-native-firebase'
import FastImage from 'react-native-fast-image'

import { styles, stylesItem } from './styles'
import ModalPassword from './ModalPassword'
import ModalCupom from './ModalCupom'

export default function Main({ navigation }) {

    const [qtyTickets, setQtyTickets] = useState([])

    const [count, setCount] = useState()
    const [idStore, setIdStore] = useState()

    const [nome, setNome] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [picture, setPicure] = useState('')

    const [ticketsS, setTicketsS] = useState()
    const [user, setUser] = useState('')

    const [loadingUser, setLoadingUser] = useState(false)
    const [loadingStore, setLoadingStore] = useState(false)

    const [ticketOn, setTicketOn] = useState(false)
    const [tmpCupom, setTmpCupom] = useState(0)

    const [modalPasswordVisible, setModalPasswordVisible] = useState(false)
    const [modalCupomVisible, setModalCupomVisible] = useState(false)

    function attTickets(qty) {

        const arr = []

        for (let i = 0; i <= 9; i++) {
            arr.push({ idx: i, selected: i <= qty - 1 ? true : false })
        }
        setQtyTickets(arr)
    }

    useEffect(() => {
        async function getBarber() {
            const idBarber = await AsyncStorage.getItem('barber')

            firebase.database().ref().child('barberInfo').child(idBarber).once('value', snapshot => {

                setNome(snapshot.val().nome.toUpperCase())
                setAddress(snapshot.val().address)
                setPhone(snapshot.val().phone)
                setPicure(snapshot.val().imageUrl)
                setLoadingStore(true)
            }).catch(err => console.log('firebase error: ' + err))
        }

        async function getUser() {
            const res = await AsyncStorage.getItem('user')
            setUser(res)
            firebase.database().ref().child('usersInfo').child(res).once('value', snapshot => {

                attTickets(snapshot.val().tickets)
                setTicketsS(snapshot.val().tickets)
                setCount(snapshot.val().cupons)
                setLoadingUser(true)
            })
        }

        getBarber()
        getUser()


    }, [])

    function attUserOnFirebase(item, chamada) {
        const ref = firebase.database().ref().child('usersInfo')
        const att = {}
        chamada === 'ticket' ?
            att[user] = {
                tickets: item,
                cupons: count
            }
            :
            att[user] = {
                tickets: ticketsS,
                cupons: item
            }
        ref.update(att)
    }

    /** 
     * MÉTODOS RESPONSÁVEIS PELA MANIPULAÇÃO DOS TICKETS
    */

    function verifyTickets(idx, stateItem) {

        if (!stateItem) {
            idx !== 0 ?
                qtyTickets[idx - 1].selected === false ?
                    null : handleTicket(idx, stateItem)
                : handleTicket(idx, stateItem)
        } else {
            idx !== 9 && qtyTickets[idx + 1].selected === false &&
                handleTicket(idx, stateItem)
        }
    }

    function handleTicket(idx, stateItem) {
        const arr = [...qtyTickets]
        arr[idx] = { idx, selected: !stateItem }
        setQtyTickets(arr)
        idx === 9 && newCupom()
    }

    function persistTickets() {
        let tck = 0
        qtyTickets.map(({ selected }) => selected && tck++)

        AsyncStorage.setItem('tickets', tck.toString()).then(() => {
            attUserOnFirebase(tck, 'ticket')
            setTicketsS(tck)
        }).catch(err => console.log('erro setItem ' + err))
    }

    /** 
     * MÉTODOS RESPONSÁVEIS PELA MANIPULAÇÃO DOS CUPONS
    */
    function newCupom() {
        setTmpCupom(count)
        setCount(count + 1)

        const arr = [...qtyTickets]
        arr.map(ticket => ticket.selected = false)
        setQtyTickets(arr)
    }

    function useCupons() {

        const cp = count - 1
        AsyncStorage.setItem('cupons', String(cp)).then(() => {
            attUserOnFirebase(cp, 'cupom')
            setCount(cp)
        }).catch(err => console.log('erro setItem ' + err))
    }

    function newTickets() {
        setTicketOn(true)
    }

    function saveTickets() {
        setTicketOn(false)
        persistTickets()
    }

    function cancelTickets() {
        setTicketOn(false)
        attTickets(ticketsS)
        setCount(tmpCupom)
    }

    function handleModals(modal, bool) {
        switch (modal) {
            case 'password':
                setModalPasswordVisible(bool)
                break
            case 'cupom':
                setModalCupomVisible(bool)
                break
            case 'salvo':

                break
            default:
                console.log('nenhum modal chamado');
        }
    }

    return (
        <View style={styles.container}>
            {loadingStore && loadingUser ?
                <View style={{ flex: 1 }}>
                    <View style={styles.containerImage}>
                        <FastImage
                            style={styles.image}
                            source={{
                                uri: picture,
                                cache: FastImage.cacheControl.immutable,
                                priority: FastImage.priority.normal
                            }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.containerInfo}>
                            <Text style={styles.txtNomeLoja}>{nome}</Text>
                            <Text style={styles.txtAddressLoja}>
                                {`${address.rua}, ${address.n} - ${address.bairro} / ${address.cidade}`}</Text>
                            <Text style={styles.txtPhoneLoja}>{`${phone.tel1} / ${phone.tel2}`}</Text>

                        </View>
                        <View style={styles.containerContent}>

                            {qtyTickets.map(ticket => (
                                <TouchableOpacity
                                    disabled={!ticketOn}
                                    onPress={() => verifyTickets(ticket.idx, ticket.selected)}
                                    key={ticket.idx}
                                    style={stylesItem.container}>
                                    <View style={stylesItem.containerImage}>

                                        <FastImage
                                            style={stylesItem.image}
                                            source={ticket.selected
                                                ? require('../../../assets/selected.png')
                                                : require('../../../assets/noSelected.png')
                                            }
                                            resizeMode={FastImage.resizeMode.contain} />
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.containerContent2}>
                            <Text style={[styles.btnText, { color: '#f8edd1' }]}>CUPONS</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 21, marginRight: 5, color: '#f8edd1' }}>
                                    {count}
                                </Text>
                                <Icon name='attach-money' size={26} color='#f8edd1' />
                            </View>
                        </View>
                        <View style={styles.containerFooter}>
                            <TouchableOpacity
                                onPress={ticketOn ? () => cancelTickets() : () => setModalPasswordVisible(true)}
                                style={ticketOn ? [styles.containerBtn, styles.containerBtnTicketsAtivated] : styles.containerBtn}>
                                <Text style={ticketOn ? styles.btnTextTicketsAtivated : styles.btnText}>
                                    {ticketOn ? 'CANCELAR' : 'TICKETS'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ticketOn ? () => saveTickets() : () => setModalCupomVisible(true)}
                                style={ticketOn ? [styles.containerBtn, styles.containerBtnTicketsAtivated] : styles.containerBtn}>
                                <Text style={ticketOn ? styles.btnTextTicketsAtivated : styles.btnText}>
                                    {ticketOn ? 'SALVAR' : 'CUPOM'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={'large'} />
                </View>
            }
            <Modal
                visible={modalPasswordVisible}
                onRequestClose={() => handleModals('password', false)}
                transparent={true}
                animationType={'fade'}
                hardwareAccelerated={true}>
                <ModalPassword
                    handleModals={handleModals}
                    newTickets={newTickets} />
            </Modal>
            <Modal
                visible={modalCupomVisible}
                onRequestClose={() => handleModals('cupom', false)}
                transparent={true}
                animationType={'fade'}
                hardwareAccelerated={true}>
                <ModalCupom
                    handleModals={handleModals}
                    useCupons={useCupons} />
            </Modal>
        </View>
    );
}
