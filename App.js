import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Screen1 from './src/screens/Screen1'
import Screen2 from './src/screens/Screen2'
import Screen3 from './src/screens/Screen3'
import Screen4 from './src/screens/Screen4'
import Navigation from './src/navigation/Navigation'
import RNBootSplash from "react-native-bootsplash";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000);
  }, []);

  return (
    <View style={{flex:1}}>
      {/* <Screen1/> */}
      {/* <Screen2/> */}
      {/* <Screen3/> */}
      {/* <Screen4/> */}
      <Navigation/>
    </View>
  )
}

export default App