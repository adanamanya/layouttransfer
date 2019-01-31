import React from 'react';
import { Platform, StyleSheet} from 'react-native';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Scene, Router, Stack} from 'react-native-router-flux';
import ConfirmTransfer from './screen/ConfirmTransfer';
import OrderList from './screen/OrderList';
import Home from './screen/Home';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scene: {
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};

const Example = () => (
  <Router onStateChange={stateHandler} sceneStyle={styles.scene}>
        <Stack key="root" titleStyle={{ alignSelf: 'center' }} hideNavBar>
            <Scene key="OrderList" component={OrderList} title="OrderList" hideNavBar/>
            <Scene key="Home" component={Home} initial title="Home" hideNavBar/>
						<Scene key="ConfirmTransfer" component={ConfirmTransfer} title="ConfirmTransfer" hideNavBar/>
        </Stack>
  </Router>
);

export default Example;