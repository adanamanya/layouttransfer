
import React, {Component} from 'react';
import {StatusBar,Text} from 'react-native';
import styles from '../styles/index.style';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem } from 'native-base';


export default class ConfirmTransfer extends Component{
  render() {
    return (
      <Container>
      <Header style={styles.header}>
      <StatusBar backgroundColor="#276ca5" barStyle="light-content" />
        <Left style={styles.flex}>
          <Button onPress={()=>{
            Actions.pop()
              }} transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body style={styles.headertitle}>
          <Title>Transfer Details</Title>
        </Body>
        <Right style={styles.flex}/>
      </Header>
      <Content>
          <Card>
            <CardItem header>
              <Text style={styles.cardordertitle}>Please Transfer To Custodian Bank</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.orderhead}>
                  Bank Name
                </Text>
                <Text style={styles.ordercontent}>
                  BCA
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.orderhead}>
                  Account Holder Name
                </Text>
                <Text style={styles.ordercontent}>
                  HPAM Ultima Ekuitas 1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.orderhead}>
                  Account Number
                </Text>
                <Text style={styles.ordercontent}>
                  458 259 8227
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.orderhead}>
                  Investing Amount
                </Text>
                <Text style={styles.ordercontent}>
                  Rp. 20.000.000
                </Text>
              </Body>
            </CardItem>
            <Button block style={styles.button1}>
            <Text style={styles.buttontext}>Send Payment Verification</Text>
          </Button>
         </Card>
      </Content>
    </Container>
    );
  }
}


