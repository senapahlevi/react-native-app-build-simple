import React,{Component} from 'react';
import {Text,View,ScrollView,StyleSheet,Picker,Switch,Button,Modal} from 'react-native';
import {Card} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

class Reservation extends Component{

    defaultState(){
        return({
            guests:1,
            smoking:false,
            date:'',
            showModal:false,
        })
    }
    constructor(props){
        super(props);
        this.defaultState
        this.state=this.defaultState();
    }

    static navigationOptions={
        title:'Reserve Table'
    }
    toogleModal(){
        this.setState({showModal:!this.state.showModal})
    }

    handleReservation(){
        console.log(JSON.stringify(this.state));
        this.toogleModal();
    }
    
    resetForm(){
        this.setState(this.defaultState());
    }

    render(){
        let todayDate = new Date().toISOString().split
    return(
        <ScrollView>
            <View style ={StyleSheet.formRow}>
                <Text style={styles.formLabel}>Number Of Guests</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={this.state.guests}
                    onValueChange={(itemValue,itemIndex)=>this.setState({guests:itemValue})}>
                        <Picker.Item label='1' value='1'/>
                        <Picker.Item label='2' value ='2'/>
                        <Picker.Item label ='3' value = '3'/>
                        <Picker.Item label='4' value='4'/>
                        <Picker.Item label='5' value ='5'/>
                        <Picker.Item label='6' value = '6'/>

                    </Picker>
            </View>
            <View style ={styles.formRow}>
                <Text style={styles.formLabel}>Smoking/Non smoking? </Text>
                <Switch 
                    style={styles.formItem}
                    value={this.state.smoking}
                    onValueChanger={(value)=>this.setState({smoking:Value})}>
                </Switch>                        
            </View>

            <View style ={styles.formRow}>
                <Text style={styles.formLabel}>Date and Time</Text>
                <DatePicker
                    style={{flex:2,marginRight:20}}
                    date={this.state.date}
                    format=''
                    mode='datetime'
                    placeholder='select date and time'
                    minDate={todayDate}
                    confirmBtnText='cancel'
                    customStyles={{
                        dateIcon:{
                            position:'absolute',
                            left:0,
                            top:4,
                            marginLeft:0
                        },
                        dateInput:{
                            marginLeft:36
                        }
                    }}
                    onDateChange={(date)=>this.setState({date:date})}
                    />
            </View>
            <View style ={styles.formRow}>
                <Button
                    title='reserve'
                    color='#512DA8'
                    onPress={()=>this.handleReservation()}
                    accessibilityLabel='learn more about this purple button'/>
            </View>
            </ScrollView>
        );
    }
}   