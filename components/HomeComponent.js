import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import { DISHES } from '../shared/dishes';

const mapStateToProps=state=>{
    return{
        dishes:state.dishes,
        promotions:state.promotions,
        leaders:state.leaders,
    }
};

function RenderItem(props) {
    const item = props.item;

    if (item != null) {
        return(
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={{uri:baseUrl+item.image}}
                >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    else {
        return(<View />)
    }
}
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        }
    }
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return(
            <ScrollView>
                <RenderItem
                    item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    />
                <RenderItem
                    item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    />
                <RenderItem
                    item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);
/*
/// PART 3/////////
import React,{Component} from 'react';
import {ScrollView,View,Text} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function RenderItem(props){
        const item =props.item;
        if(item!=null){
            return(
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={
                        require('./images/uthappizza.png')}>
                    <Text
                    style={{margin:10}}>
                        {item.description}
                    </Text>
                    </Card>
                    );
            }
            else{
                return(<View></View>);
            }
    }

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            promotions:PROMOTIONS,
            leaders:LEADERS
        };
    }

    render(){
        return(
            <ScrollView>
            <RenderItem item={this.state.dishes.filter((dish)=>dish.featured)[0]}/>
            <RenderItem item ={this.state.leaders.filter((leader)=>leader.featured)[0]}/>
            <RenderItem item ={this.state.promotions.filter((promo)=>promo.featured)[0]}/>
            </ScrollView>
        );
    }

}
////PART 3/////////
*/