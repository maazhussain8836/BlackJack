import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import CButton from '../components/CButton';
import axiosConfig from '../provider/axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GestureFlipView from 'react-native-gesture-flip-card';

const Screen4 = ({navigation}) => {
  const [rndNum1, setRndNum1] = useState(0);
  const [rndNum2, setRndNum2] = useState(0);
  const [rndNum3, setRndNum3] = useState(0);
  const [apiItems1, setApiItems1] = useState([]);
  const [apiItems2, setApiItems2] = useState([]);
  const [apiItems3, setApiItems3] = useState([]);
  const [apiData1, setApiData1] = useState(12);
  const [apiData2, setApiData2] = useState(39);
  const [apiData3, setApiData3] = useState(72);
  const viewRef1 = useRef();
  const viewRef2 = useRef();
  const viewRef3 = useRef();

  const onShuffle1 = () => {
    setRndNum1(Math.floor(Math.random() * 100)+2);
    viewRef1.current.flipLeft();
    viewRef1.current.flipRight();
    apiItems1.map(res => {
      res?.id == rndNum1 ? setApiData1(res?.id) : null;
    });
  };
  const onShuffle2 = () => {
    setRndNum2(Math.floor(Math.random() * 100)+2);
    viewRef2.current.flipLeft();
    viewRef2.current.flipRight();
    apiItems2.map(res => {
      res?.id == rndNum2 ? setApiData2(res?.id) : null;
    });
  };

  const onShuffle3 = () => {
    setRndNum3(Math.floor(Math.random() * 100)+2);
    viewRef3.current.flipLeft();
    viewRef3.current.flipRight();
    apiItems3.map(res => {
      res?.id == rndNum3 ? setApiData3(res?.id) : null;
    });
  };

  const onShuffle=()=>{
    onShuffle1()
    onShuffle2()
    onShuffle3()
  }
  useEffect(() => {
    setApiData1( apiData1)
    setApiData2( apiData2)
    setApiData3( apiData3)
  }, [])

  let arr = [];
  useEffect(() => {
    axiosConfig.get('comments').then(res => {
      const resData = res.data.slice(1, 100);
      resData.map(item => {
        // console.log(item)
        arr.push(item);
        setApiItems1(arr);
        setApiItems2(arr);
        setApiItems3(arr);
        console.log(apiItems1)
        console.log(apiItems2)
        console.log(apiItems3)
      });
    });
  
  }, []);

   
  const renderFront1 = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <FontAwesome name={'heart'} size={17} color={'red'} />
            <Text style={styles.cText}>{apiData1}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <FontAwesome name={'heart'} size={50} color={'red'} />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <FontAwesome name={'heart'} size={17} color={'red'} />
            <Text style={styles.cText}>{apiData1}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBack1 = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={17}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData1}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={50}
              color={'#000'}
            />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={17}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData1}</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderFront2 = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <FontAwesome name={'heart'} size={17} color={'red'} />
            <Text style={styles.cText}>{apiData2}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <FontAwesome name={'heart'} size={50} color={'red'} />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <FontAwesome name={'heart'} size={17} color={'red'} />
            <Text style={styles.cText}>{apiData2}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBack2 = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={17}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData2}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={50}
              color={'#000'}
            />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={17}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData2}</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderFront3 = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <FontAwesome name={'heart'} size={17} color={'red'} />
            <Text style={styles.cText}>{apiData3}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <FontAwesome name={'heart'} size={50} color={'red'} />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <FontAwesome name={'heart'} size={17} color={'red'} />
            <Text style={styles.cText}>{apiData3}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBack3 = () => {
    return (
      <View style={styles.cView}>
        <View style={{padding: 5}}>
          <View style={{alignItems: 'flex-start'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={17}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData3}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={50}
              color={'#000'}
            />
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <MaterialCommunityIcons
              name={'cards-spade'}
              size={17}
              color={'#000'}
            />
            <Text style={styles.cText}>{apiData3}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          justifyContent:'center',
          // width: '95%',
          // height: 160,
          // marginLeft: 'auto',
          // marginRight: 'auto',
          
        }}>
        <View style={{marginHorizontal:15}}>
          <GestureFlipView
            width={100}
            height={120}
            gestureEnabled={false}
            ref={ref => (viewRef1.current = ref)}>
            {renderBack1()}
            {renderFront1()}
          </GestureFlipView>
        </View>
        <View style={{marginHorizontal:15}}>
        <GestureFlipView width={100} height={120}
        gestureEnabled={false}
        ref={(ref) => (viewRef2.current = ref)} >
          {renderBack2()}
          {renderFront2()}
        </GestureFlipView>
        </View>
        <View style={{marginHorizontal:15}}>
        <GestureFlipView width={100} height={120}
        gestureEnabled={false}
         ref={(ref) => (viewRef3.current = ref)}
         >
          {renderBack3()}
          {renderFront3()}
        </GestureFlipView>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginTop: 50,
        }}>
        <TouchableOpacity
          onPress={() =>onShuffle() }>
          <CButton text={`Shuffle `} width={140} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Screen2');
          }}>
          <CButton text={`Reset `} width={140} />
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
    fontSize: 18,
    textAlign: 'center',
  },
  cView: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 110,
    height: 150,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
export default Screen4;
