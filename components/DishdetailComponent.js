import React, { Component } from 'react';
import { View, Text,ScrollView,FlatList } from 'react-native';
import { Card,Icon } from 'react-native-elements';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps=state=>{
    return {
        dishes:state.dishes,
        comments:state.comments,
    }
};


function RenderDish(props) {
    const dish = props.dish;

    if (dish != null) {
        return(
            <Card
                featuredTitle={dish.name}
                image={{uri:baseUrl+dish.image}}
                >
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
                <Icon //icon buka dan tutup buat mode ketika neken favorite dan unfavorite gambar hati ada efek
                raised
                reverse
                name={props.favorite? 'heart':'heart-o'}
                type='font-awesome'
                color='#F50'
                onPress={()=>props.favorite? console.log('Already favorite'):props.onPress()}/>

            </Card>
        );
    }
    else {
        return(<View></View>)
    }
}

function RenderComponents(props){ //display comment about dish
    const comments = props.comments;
    const renderCommentItem = ({item,index})=>{    
        return (
            <View key ={index} style={{margin:10}}>
                <Text style={{fontSize:14}}>{item.comment}</Text> 
                 <Text style={{fontSize:12}}>{item.rating}</Text>
        <Text style ={{fontSize:12}}>{'--@ ' +item.author + ',' + item.date}</Text>
            </View>
        );
    };

    return(
        <Card title='Comments'> //display comment
            <FlatList
            data ={comments}
            renderItem={renderCommentItem}
            keyExtractor={item=>item.id.toString()}
            />
        </Card> //sampe sini comment display
    );
}



class Dishdetail extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments:COMMENTS, //buat display comment
            favorites:[],//dish ID selected by user bisa fill atau unfill warna heart nya
        };
    };
    markFavorite(dishId){
        this.setState({favorite:this.state.favorite.concat(dishId)})
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    
    render() {
        const dishId = this.props.navigation.getParam('dishId','');

        return(
        <ScrollView>
         <RenderDish dish={this.props.dishes.dishes[+dishId]}  //display comment
            favorite={this.state.favorite.some(el=>el===dishId)}
            onPress={()=>this.markFavorite(dishId)}/>
            <RenderComments comments={this.props.comments.comments.filter((comment)=>comment.dishId==dishId)}/>//display comment
        </ScrollView>
        );
    }
}

export default connect (mapStateToProps)(Dishdetail);
/*
////PART 3/////
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {
        const dishId = this.props.route.params.dishId;
        return(
            <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}
export default Dishdetail;
////PART 3/////////////
*/