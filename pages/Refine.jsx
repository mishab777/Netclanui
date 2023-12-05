import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';

const data = [
  {label: 'Available | Hey Let Us Connect', value: '1'},
  {label: 'Away | Stay Descrete And Watch', value: '2'},
  {label: 'Busy | Do Not Disturb | Will Catch Up Later', value: '3'},
  {label: 'SOS | Emergency! Need Assistance ', value: '4'},
];

const Refine = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const [inputText, setInputText] = useState(
    'Hi community! I am open to new connections',
  );

  const letterCount = inputText.replace(/[^a-zA-Z]/g, '').length;

  const [value, setValue] = useState('1');

  const navigation = useNavigation();

  const backtohome = () => {
    navigation.navigate('Home');
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionPress = option => {
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(item => item !== option)
        : [...prevSelectedOptions, option],
    );
  };

  const getOptionStyle = option => {
    const isSelected = selectedOptions.includes(option);
    const backgroundColor = isSelected ? '#143D59' : 'white';
    const textColor = isSelected ? 'white' : '#143D59';

    return {
      ...styles.option,
      backgroundColor,
      borderColor: textColor,
      color: textColor,
    };
  };
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.topbar}>
        <View
          style={{
            width: '40%',
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableWithoutFeedback onPress={backtohome}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/back.png')}
            />
          </TouchableWithoutFeedback>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>
            Refine
          </Text>
        </View>
      </View>
      <View style={styles.dropdownview}>
        <View style={styles.dropdownlist}>
          <Text style={{color: '#143D59', fontWeight: '500'}}>
            Select Your Availability
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle
            selectedTextStyle
            inputSearchStyle
            data={data}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />
        </View>
      </View>
      <View style={styles.statusview}>
        <View style={styles.statuslist}>
          <Text style={{color: '#143D59', fontWeight: '500'}}>
            Select Your Availability
          </Text>
          <TextInput
            style={styles.statusinput}
            value={inputText}
            onChangeText={text => setInputText(text)}
          />
          <View
            style={{
              width: '97%',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#143D59', fontSize: 13}}>
              {letterCount}/250
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.sliderview}>
        <View style={styles.sliderlist}>
          <Text style={{color: '#143D59', fontWeight: '500'}}>
            Select Hyper Local Distance
          </Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 30,
            }}>
            <View
              style={{
                backgroundColor: '#143D59',
                width: 32,
                height: 28,
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, color: 'white'}}>{sliderValue}</Text>
            </View>
          </View>
        </View>
        <Slider
          style={{width: '95%', height: 30}}
          minimumValue={1}
          maximumValue={100}
          minimumTrackTintColor="#143D59"
          maximumTrackTintColor="gray"
          thumbTintColor="#143D59"
          step={1}
          onValueChange={value => setSliderValue(value)}
        />
        <View
          style={{
            width: '85%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#143D59', fontSize: 13}}>1 Km</Text>
          <Text style={{color: '#143D59', fontSize: 13}}>100 Km</Text>
        </View>
      </View>
      <View style={styles.purposeview}>
        <View style={styles.purposelist}>
          <Text style={{color: '#143D59', fontWeight: '500'}}>
            Select Purpose
          </Text>
          <View style={styles.categories}>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Coffee')}>
              <View style={getOptionStyle('Coffee')}>
                <Text style={{color: getOptionStyle('Coffee').color}}>
                  {'Coffee'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Dating')}>
              <View style={getOptionStyle('Dating')}>
                <Text style={{color: getOptionStyle('Dating').color}}>
                  {'Dating'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Hobbies')}>
              <View style={getOptionStyle('Hobbies')}>
                <Text style={{color: getOptionStyle('Hobbies').color}}>
                  {'Hobbies'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Friendship')}>
              <View style={getOptionStyle('Friendship')}>
                <Text style={{color: getOptionStyle('Friendship').color}}>
                  {'Friendship'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Matrimony')}>
              <View style={getOptionStyle('Matrimony')}>
                <Text style={{color: getOptionStyle('Matrimony').color}}>
                  {'Matrimony'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Dinning')}>
              <View style={getOptionStyle('Dinning')}>
                <Text style={{color: getOptionStyle('Dinning').color}}>
                  {'Dinning'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Movies')}>
              <View style={getOptionStyle('Movies')}>
                <Text style={{color: getOptionStyle('Movies').color}}>
                  {'Movies'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleOptionPress('Business')}>
              <View style={getOptionStyle('Business')}>
                <Text style={{color: getOptionStyle('Business').color}}>
                  {'Business'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 150,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: '#143D59',
          }}>
          <TouchableOpacity onPress={backtohome}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
              Save & Explore
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Refine;

const styles = StyleSheet.create({
  topbar: {
    width: '100%',
    backgroundColor: '#143D59',
    height: 60,
    alignItems: 'flex-start',
  },
  dropdown: {
    width: '100%',
    padding: 10,
    height: 45,
    borderColor: '#143D59',
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdownview: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
  },
  dropdownlist: {
    width: '85%',
    height: 90,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  statusinput: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#143D59',
    borderWidth: 1,
    height: 70,
    width: '100%',
    color: '#143D59',
  },
  statusview: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
  },
  statuslist: {
    width: '85%',
    height: 130,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  sliderview: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  sliderlist: {
    width: '85%',
    height: 70,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  purposeview: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
  },
  purposelist: {
    width: '85%',
    height: 200,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  categories: {
    width: '100%',
    height: 130,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: 80,
    borderWidth: 1,
    borderColor: '#143D59',
    height: 35,
    backgroundColor: '#143D59',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
