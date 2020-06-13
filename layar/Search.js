import * as React from 'react';
import { Appbar,Title } from 'react-native-paper';
import {View,Text} from 'react-native';
import Header from './Header';

export default Search=()=>{
    return (
     <View style={{flex:1}}>
         <Header name="search screen"/>
         <Text> Ini Search</Text>
     </View>
        
    );
  }