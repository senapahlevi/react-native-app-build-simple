import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';


class Contact extends Component{
  

    static navigationOptions={
        title:'Contact US!'
    };
    render(){
        return(
            <Card title='CONTACT INFORMATION'>
                <Text style={{fontWeight:50 , margin:15, fontSize:10}}>
                      
{`121, Clear Water Bay Road
Clear Water Bay, Kowloon
HONG KONG
Tel: +852 1234 5678
Fax: +852 8765 4321
Email:confusion@food.net`}
                </Text>
            </Card>
        );
    }
}


export default Contact;


/*Our Address

121, Clear Water Bay Road
Clear Water Bay, Kowloon
HONG KONG
Tel: +852 1234 5678
Fax: +852 8765 4321
Email:confusion@food.net
*/