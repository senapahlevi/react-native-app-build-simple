


/*import React from 'react';
import {View,Text,Image,StyleSheet}from 'react-native';
import {MaterialCommunityIcons}from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {weatherConditions} from '../utils/WeatherConditions';

const Weather = ({weather,temperature}) => {
if(weather!=null){
return (
<View style = {styles.container,
{backgroundColor:weatherConditions[weather].color}
}
>
    <View style={styles.headerContainer} >
    <MaterialCommunityIcons size={48} name={weatherConditions[weather.icon]} color={'#fff'}/>
    <Text style = {styles.tempText}> Temperature ˚</Text>
</View>
    <View style={styles.bodyContainer} >
<Text style={styles.title}>{weatherConditions[weather].title}</Text>
<Text style = {styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
    </View>
</View>
    );
};

const styles=StyleSheet.create({
    weatherContainer:{
        flex:1,backgroundColor:"#f7b733"
    },
    headerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    tempText:{
        fontSize:48,
        color:'#fff'
    },

    bodyContainer:{
        flex:2,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingLeft:25,
        marginBottom:40
    },
    title:{
        fontSize:48,
        color:"#fff"
    },
    subtitle:{
        fontSize:24,
        color:"#fff"
    }
});
export default Weather;*/
