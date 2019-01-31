
import React, {Component} from 'react';
import {StatusBar,Text} from 'react-native';
import styles from '../styles/index.style';
import { Actions } from 'react-native-router-flux';
import { Container,Footer, FooterTab, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem } from 'native-base';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/Entypo';
import { Col, Row, Grid } from "react-native-easy-grid";



export default class OrderList extends Component{
  render() {
    return (
      <Container>
      <Header style={styles.header}>
      <StatusBar backgroundColor="#276ca5" barStyle="light-content" />
        <Left style={styles.flex2}>
          <Button onPress={()=>{
            Actions.pop()
              }} transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body style={styles.headertitle2}>
          <Title>Invest</Title>
        </Body>
        <Right style={styles.flex2}/>
      </Header>
      <Content>
          <Card>
            <CardItem>
              <Left>
                <Icon2 style={styles.Iconshehe} name='plus-circle-outline'/>
              </Left>
              <Body style={styles.iconText1}>
                <Text style={styles.boldtext}>
                   Deposit
                </Text>
              </Body>
              <Right/>
            </CardItem>
            <CardItem>
              <Left>
                <Icon2 style={styles.Iconshehe} name='minus-circle-outline'/>
              </Left>
              <Body style={styles.iconText1}>
                <Text style={styles.boldtext}>
                   Withdraw
                </Text>
              </Body>
              <Right/>
            </CardItem>
         </Card>
         <Card>
            <CardItem>
              <Left>
                <Icon3 style={styles.Iconshihi} name='refresh'/>
              </Left>
              <Body style={styles.iconText1}>
                <Text style={styles.boldtext}>
                   Pending Orders
                </Text>
              </Body>
              <Right/>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.boldtext}>
                  Deposit Rp. 100.000.000.000
                </Text>
                <Grid>
                  <Col size={95}>
                  <Text>
                    To HPAM Ultima Ekuitas 1
                  </Text>
                  </Col>
                  <Col size={48} style={{alignSelf:'flex-end'}}>
                  <Grid>
                    <Col size={90}>
                    <Text style={styles.orange}>Need Transfer Receipt</Text>
                    </Col>
                    <Col size={20}>
                    <Icon4 style={styles.Iconshahaha} name='keyboard-arrow-right'/>
                    </Col>
                  </Grid>
                  </Col>
                </Grid>
                <Text style={styles.orderfoot1}>
                  Aug 15, 2018
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.boldtext}>
                  Withdraw Rp. 100.000.000.000
                </Text>
                <Grid>
                  <Col size={95}>
                  <Text>
                  From HPAM Ultima Ekuitas 1
                  </Text>
                  </Col>
                  <Col size={35} style={{alignSelf:'flex-end'}}>
                  <Grid>
                    <Col size={90}>
                    <Text style={styles.blue}>In Progress</Text>
                    </Col>
                    <Col size={20}>
                    <Icon4 style={styles.Iconshahaha} name='keyboard-arrow-right'/>
                    </Col>
                  </Grid>
                  </Col>
                </Grid>
                <Text style={styles.orderfoot}>
                  Aug 15, 2018
                </Text>
              </Body>
            </CardItem>
         </Card>
         <Card>
            <CardItem>
              <Left>
                <Icon4 style={styles.Iconshihi} name='playlist-add-check'/>
              </Left>
              <Body style={styles.iconText1}>
                <Text style={styles.boldtext}>
                   Completed Orders
                </Text>
              </Body>
              <Right/>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.boldtext}>
                  Sell HPAM Ultima Ekuitas 1
                </Text>
                <Grid>
                  <Col size={95}>
                  <Text>
                  Rp. 10.000.000
                  </Text>
                  </Col>
                  <Col size={35} style={{alignSelf:'flex-end'}}>
                  <Grid>
                    <Col size={90}>
                    <Text style={styles.green}>Completed</Text>
                    </Col>
                    <Col size={20}>
                    <Icon4 style={styles.Iconshahaha} name='keyboard-arrow-right'/>
                    </Col>
                  </Grid>
                  </Col>
                </Grid>
                <Text style={styles.orderfoot}>
                  Aug 15, 2018
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.boldtext}>
                  Buy HPAM Ultima Ekuitas 1
                </Text>
                <Grid>
                  <Col size={95}>
                  <Text>
                  Rp. 10.000.000
                  </Text>
                  </Col>
                  <Col size={35} style={{alignSelf:'flex-end'}}>
                  <Grid>
                    <Col size={90}>
                    <Text style={styles.green}>Completed</Text>
                    </Col>
                    <Col size={20}>
                    <Icon4 style={styles.Iconshahaha} name='keyboard-arrow-right'/>
                    </Col>
                  </Grid>
                  </Col>
                </Grid>
                <Text style={styles.orderfoot}>
                  Aug 15, 2018
                </Text>
              </Body>
            </CardItem>
         </Card>
      </Content>
      <Footer>
          <FooterTab style={{backgroundColor:"#f3f3f3"}}>
            <Button>
              <Icon5 style={styles.Iconshihi} name='bar-graph'/>
              <Text>Portfolio</Text>
            </Button>
            <Button>
              <Icon4 style={styles.iconsrotate} name='swap-vertical-circle'/>
              <Text style={styles.blue}>Invest</Text>
            </Button>
            <Button>
              <Icon4 style={styles.Iconshihi} name='person'/>
              <Text>Advisor</Text>
            </Button>
            <Button>
              <Icon4 style={styles.Iconshihi} name='live-help'/>
              <Text>Chat</Text>
            </Button>
            <Button>
              <Icon4 style={styles.Iconshihi} name='settings'/>
              <Text>Settings</Text>
            </Button>
          </FooterTab>
      </Footer>
    </Container>
    );
  }
}


