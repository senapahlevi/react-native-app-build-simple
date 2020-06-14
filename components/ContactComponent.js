import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Card} from 'react-native-elements'; 


class Contact extends Component{
  //no using constructor and super props 
    static navigationOptions={
        title:'Contact US'      //for title in header bar
    };
    render(){
        return(
            <Card title='CONTACT INFORMATION'>
                <Text style={{fontWeight:'bold', margin:15, fontSize:15}}>                
        121, Clear Water Bay Road
        {"\n"}{"\n"}        
        Clear Water Bay, Kowloon
        {"\n"}{"\n"}
        HONG KONG
        {"\n"}{"\n"}
        Tel: +852 1234 5678
        {"\n"}{"\n"}
        Fax: +852 8765 4321
        {"\n"}{"\n"}
        Email:confusion@food.net
                </Text>
            </Card>
        );
    }
}

export default Contact; //for export to main component 


/*Our Address

121, Clear Water Bay Road
Clear Water Bay, Kowloon
HONG KONG
Tel: +852 1234 5678
Fax: +852 8765 4321
Email:confusion@food.net
*/