import {Image, ScrollView} from 'react-native';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Data} from './persons';

const Personal = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
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
        {Data.map((item,index) => {
          return (
            <View style={styles.profiles} key={index}>
              <View style={styles.picture}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={item.profile}
                />
              </View>
              <View style={styles.profiles1}>
                <View style={styles.profiles1invite}>
                  <Text style={{color: '#143D59', fontWeight: '600'}}>
                    + INVITE
                  </Text>
                </View>
                <View style={styles.description}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#143D59',
                    }}>
                    {item.name}
                  </Text>
                  <Text style={{color: '#143D59', fontWeight: '400'}}>
                    {item.position}
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#143D59'}}>
                    {item.distance}
                  </Text>
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
                        backgroundColor: '#143D59',
                        height: '100%',
                      }}></View>
                  </View>
                </View>
                <View style={{width:"82%"}}>
                  <Text style={{fontWeight:"500",color:"#143D59"}}>{item.interest}</Text>
                  <Text style={{color:"#143D59",fontSize:13}}>{item.message}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Personal;

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
  profiles: {
    width: '100%',
    height: 230,
    alignItems: 'center',
    position: 'relative',
  },
  profiles1: {
    width: '85%',
    height: 200,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5,
    backgroundColor: 'white',
    marginLeft: 20,
    position: 'relative',
  },
  picture: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 1,
    elevation: 5,
    overflow: 'hidden',
  },
  profiles1invite: {
    height: 20,
    width: '95%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  description: {
    width: '70%',
    height: 85,
    marginLeft: 40,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
});
