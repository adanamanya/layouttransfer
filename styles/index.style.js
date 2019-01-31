import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3490dc',
  },
  containerConfirmTrans: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  containerOrderList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  hehe: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  hehe: {
    alignSelf:'center',
    marginTop: hp('40%')
  },
  haha: {
    alignSelf:'center',
    marginTop: hp('3%')
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header:{
    backgroundColor: '#3490dc',
  },
  statusbar:{
    backgroundColor:'#276ca5'
  },
  flex:{
    flex:2,
  },
  flex2:{
    flex:1,
  },
  headertitle:{
    flex:3,
    alignSelf:'center',
    width: wp('20%')
  },
  headertitle2:{
    flex:1,
    marginLeft: wp('10%'),
    alignSelf:'center'
  },
  cardordertitle:{
    color:'#000'
  },
  ordercontent:{
    color:'#3490dc'
  },
  buttontext:{
    color:'#fff'
  },
  button1:{
    marginTop: hp('2%'),
    backgroundColor: '#3490dc',
    marginBottom:hp('2%'),
    width: wp('95%'),
    alignSelf:'center'
  },
  Iconshehe:{
    fontSize:22,
    color:'#3490dc',
    flex:1
  },
  Iconshihi:{
    fontSize:22,
    color:'#000',
    flex:1
  },
  boldtext:{
    color: '#000',
    fontSize: 15,
    flex:1,
    alignSelf:'flex-start'
  },
  orderfoot:{
    fontSize: 12
  },
  orderfoot1:{
    fontSize: 12,
    marginTop:hp('-2%')
  },
  viewdetailstext:{
    alignSelf:'flex-end',
    flex:1
  },
  iconText1:{
    marginLeft:wp('-36%')
  },
  Iconshahaha:{
    fontSize:18,
    color:'#000',
  },
  blue:{
    color:'#3490dc'
  },
  orange:{
    color:'#FFA500'
  },
  green:{
    color:'#008000'
  },
  iconsrotate:{
    transform: [{ rotate: '90deg'}],
    fontSize:22,
    color:'#3490dc',
    flex:1
  }
});