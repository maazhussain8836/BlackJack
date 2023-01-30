import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import CButton from '../components/CButton';
import axiosConfig from '../provider/axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GestureFlipView from 'react-native-gesture-flip-card';
const Screen3 = ({navigation}) => {
  const [rndNum, setRndNum] = useState();
  const [apiItems, setApiItems] = useState([]);
  const [apiData, setApiData] = useState(12);
  const viewRef = useRef();

  const onShuffle = () => {
    setRndNum(Math.floor(Math.random() * 100)+2);
    viewRef.current.flipLeft();
    viewRef.current.flipRight();
    apiItems.map(res => {
      console.log(res);
      res?.id == rndNum ? setApiData(res?.id) : null;

    });
  };
  useEffect(() => {
    setApiData( apiData)
  }, [])
  
console.log(apiData,'Api data')
  let arr = [];
  useEffect(() => {
    axiosConfig.get('comments').then(res => {
      let resData = res.data.slice(1, 100);
      resData.map(item => {
        arr.push(item);
        setApiItems(arr);
        console.log(apiItems)
      });
    });
  }, []);

  // useEffect(() => {
  //   axiosConfig.get('comments').then(res => {
  //     let arr = [];
  //     const resData = res.data.slice(1, 100);
  //   });
  // }, [apiItems]);

  // console.log(apiItems,'Maaz')

  const renderFront = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <FontAwesome name={'heart'} size={20} color={'red'} />
            <Text style={styles.cText}>{apiData}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <FontAwesome name={'heart'} size={60} color={'red'} />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <FontAwesome name={'heart'} size={20} color={'red'} />
            <Text style={styles.cText}>{apiData}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBack = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={20}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={60}
              color={'#000'}
            />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={20}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <GestureFlipView
          gestureEnabled={false}
          width={100}
          height={120}
          ref={ref => (viewRef.current = ref)}>
          {renderBack()}
          {renderFront()}
        </GestureFlipView>
      </View>

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          // borderWidth:1,
          // borderColor:'#000',
          marginTop: '35%',
        }}>
        <TouchableOpacity onPress={() => onShuffle()}>
          <CButton text={`Shuffle `} width={120} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('Screen2');
          }}>
          <CButton text={`Reset `} width={120} />
        </TouchableOpacity>
      </View>

      {/* <Text>Screen3</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  cText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
  },
  cView: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 120,
    height: 170,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowColor: '#000',
    shadowRadius: 16.0,
    backgroundColor: '#FFF',
    elevation: 24,
  },
});
export default Screen3;
