
import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import * as anim from '../anim/anim.json';
import LottieView from 'lottie-react-native';
import { Button, Text } from 'native-base';
import styles from '../styles/index.style';
import { Actions } from 'react-native-router-flux';



export default class Home extends Component{
  render() {
    return (
      <View style={styles.containerHome}>
        <Text style={styles.welcome}>Choose One to open!</Text>
        <LottieView
        source={anim}
        autoPlay
        loop
        />
        <Button
          onPress={()=>{
            Actions.ConfirmTransfer();
          }}
         success style={styles.hehe}><Text> Confirm Transfer </Text></Button>
        <Button
          onPress={()=>{
          Actions.OrderList();
          }}
         info style={styles.haha}><Text>Invest</Text></Button>
      </View>
    );
  }
}

