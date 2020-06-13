import * as React from 'react';
import { Appbar,Title } from 'react-native-paper';
import {View,Text} from 'react-native';
export default Header=()=>{
    return (
      <Appbar.Header
      theme={{
        colors:{
            primary:"00aaff"
      }
    }}
      >
        <Title> 
          Forecasting Weather
        </Title>
        
      </Appbar.Header>
    );
  }