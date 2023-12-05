import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react'

const Business = () => {
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <View style={styles.searchbar}>
          <View style={styles.input}>
            <Image
              style={{width: 13, height: 13}}
              source={require('../assets/loupe.png')}
            />
            <TextInput style={styles.inputbar}/>
          </View>
          <Image
            source={require('../assets/filter.png')}
            style={{width: 25, height: 25}}
          />
        </View>
        <View style={{width:"100%",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",height:250,padding:10}}>
          <Image style={{width:100,height:100}} source={require("../assets/folder.webp")}/>
          <Text style={{color:"#143D59",fontSize:15,fontWeight:"600"}}>Your explore list is empty</Text>
          <Text>Soory we couldn't find any user near you .Try increasing your search radius</Text>

        </View>
    </View>
  )
}

export default Business

const styles = StyleSheet.create({
  searchbar: {
    width: '100%',
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 250,
    height: 27,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: '#042439',
    borderWidth: 0.5,
  },
  inputbar: {
    width: 160,
    backgroundColor: 'white',
    height: 26,
  },
})