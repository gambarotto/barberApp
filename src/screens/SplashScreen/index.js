import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import firebase from 'react-native-firebase'
import AsyncStorage from '@react-native-community/async-storage'

import { styles } from './styles';

export default function SplashScreen({ navigation }) {
    useEffect(() => {

        async function verifyUser() {

            //AsyncStorage.clear()
            const barber = await AsyncStorage.getItem('barber')

            if (barber) {
                // console.log('barber');
                // console.log(barber);

                navigation.navigate('Main')
            } else {
                const userAsync = await AsyncStorage.getItem('user')

                if (userAsync) {
                    // console.log('user');
                    // console.log(userAsync);

                    navigation.navigate('Welcome')
                } else {
                    console.log('firebase');

                    firebase.auth().signInAnonymously()
                        .then(({ user }) => {
                            AsyncStorage.setItem('user', user.uid).then(() => {
                                const ref = firebase.database().ref('usersInfo')

                                 const userData = {}
                                userData[user.uid] = {
                                    uid: user.uid,
                                    tickets: 0,
                                    cupom: 0
                                }
                                ref.update(userData).then(() => {
                                    navigation.navigate('Welcome')
                                }).catch(err => console.log(err))
                                
                                
                            }).catch(err => console.log('setItem ' + err))
                        }).catch(err => console.log(err))
                }
            }
        }

        setTimeout(() => {
            verifyUser()
        }, 3000)

    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/logoM.png')} />
            <Text style={styles.logoText}>MASTER BARBER</Text>
        </View>

    );
}
