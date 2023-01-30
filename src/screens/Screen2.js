import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const Screen2 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View>
          <Image
            source={require('../assets/21.png')}
            resizeMode="cover"
            style={{width: 300, height: 260}}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // shadowColor: '#000',
            borderRadius: 50,
            // shadowOffset: {
            //   width: 0,
            //   height: 12,
            // },
            // shadowOpacity: 0.18,
            // shadowRadius: 16.0,
            // backgroundColor: '#000',
            // elevation: 24,
            padding: 30,
          }}>
          <View style={{...styles.cView, marginRight: 10}}>
            <Image
              source={require('../assets/24.png')}
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                bottom: 10,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
              <Text style={styles.cText}>Play with 1 Card</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.cView, marginLeft: 10}}>
            <Image
              source={require('../assets/14-removebg-preview.png')}
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                bottom: 10,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Screen4')}>
              <Text style={styles.cText}>Play with 3 Cards</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            top: 20,
          }}>
          <Image
            source={require('../assets/18.png')}
            resizeMode="cover"
            style={{
              width: 300,
              height: 200,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cText: {
    fontWeight: 'bold',
    color: '#D9DBDC',
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: '#292F33',
  },
  cView: {
    width: 160,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#FFF',
    shadowColor: 'red',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.18,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
export default Screen2;
