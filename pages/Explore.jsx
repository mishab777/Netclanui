import { StyleSheet, Text, View,Image, TouchableWithoutFeedback,ImageBackground} from 'react-native'
import React,{useState} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Personal from './Personal';
import Business from './Business';
import Merchant from './Merchant';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';



const Tab = createMaterialTopTabNavigator();




const Explore = () => {

  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const refinepage = ()=>{
    navigation.navigate("Refine")
  }
  return (
    <View style={{flex:1}}>
        <View style={styles.navbar}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <Image source={require('../assets/menu.png')} style={{ width: 35, height: 35 }} />
        </TouchableWithoutFeedback>
            <View style={styles.navbarname}>
                <Text style={styles.textname}>Howdy Muhammed Mishab !!</Text>
                <View style={styles.location}>
                <Image source={require("../assets/pin.png")} style={{width:10,height:10}}/>
                <Text style={{color:"white",fontSize:12}}>Nilambur</Text>

                </View>

            </View>
            <TouchableWithoutFeedback onPress={refinepage}>
            <Image source={require("../assets/choice.png")} style={{width:30,height:30}}/>
            </TouchableWithoutFeedback>


        </View>
        <Tab.Navigator tabBarOptions={{
          style: { backgroundColor: '#143D59' }, 
          indicatorStyle: { height: 0 },
          tabBarLabelStyle: { fontWeight: 'bold' }, 
        }}>
      <Tab.Screen name="personal" component={Personal} 
      options={{
        tabBarLabelStyle:{color:"white",fontWeight:"bold"},
      }}/>
      <Tab.Screen name="business" component={Business} 
      options={{
        tabBarLabelStyle:{color:"white",fontWeight:"bold"},
      }}/>
      <Tab.Screen name="Merchant" component={Merchant} 
      options={{
        tabBarLabelStyle:{color:"white",fontWeight:"bold"},
      }}/>
    </Tab.Navigator>
    <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropOpacity={0.5}>
        <View style={styles.modalView}>
        <ImageBackground
      source={require('../assets/bg.jpg')} // Replace 'your-image-path.jpg' with the actual path to your image
      style={styles.backgroundImage}
    >
      <View style={{justifyContent:"space-evenly",height:100}}>
        <Text style={{color:"white",fontSize:18,fontWeight:"600"}}>Muhammed Mishab</Text>
        <Text style={{color:"white"}}>MMBANG00BG4500</Text>
        <View
                    style={{
                      height: 12,
                      width: 120,
                      backgroundColor: 'lightgray',
                      borderRadius: 10,
                      alignItems: 'flex-start',
                      overflow: 'hidden',
                    }}>
                    <View
                      style={{
                        width: '50%',
                        backgroundColor: 'white',
                        height: '100%',
                      }}></View>
                  </View>
      </View>
    </ImageBackground>
    <View style={{width:150,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("../assets/user.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Settings</Text>

      </View>
      <View style={{width:160,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("../assets/group.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Messages</Text>

      </View>
      <View style={{width:160,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/gift.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Send a gift</Text>

      </View>
      <View style={{width:280,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/wallet.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Earn by driving or delivering</Text>

      </View>
      <View style={{width:180,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/case.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Business Hub</Text>

      </View>
      <TouchableOpacity onPress={handleuber}>
      <View style={{width:240,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/user.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Manage Uber account</Text>

      </View>
      </TouchableOpacity>
      <View style={{width:130,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/ex.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Legal</Text>

      </View>
        </View>
      </Modal>
        
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    navbar:{
        width:"100%",
        height:60,
        backgroundColor:"#0B2E42",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    navbarname:{
        width:"65%",
        height:"100%",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"space-evenly"
    },
    textname:{
        fontSize:14,
        color:"white",
        fontWeight:"600"
    },
    location:{
        width:65,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    modalView: {
      width:"85%",
      marginLeft:-20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    backgroundImage: {
      width:"100%",
      height:200,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)', 
      padding: 20,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  
})