import React,{Component} from 'react';
import {FlatList,View,Text,Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import { Loading }from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import Swipeout from 'react-native-swipeout';
import {deleteFavorite} from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

const mapStateToProps=state=>{
    return {
        dishes:state.dishes,
        favorites:state.favorites
    }
};

const mapDispatchToProps=dispatch=>({
    deleteFavorite:(dishId)=>dispatch(deleteFaovrite(dishId))
});

class Favorites extends Component{
    static navigationOptions={
        title:'my Favorites'
    };
    render(){
        const {navigate}=this.props.navigation;
        const renderMenuItem=({item,index})=>{
            const rightButton=[{
                text:'Delete',
                type:'delete',
                onPress:()=>{
                    Alert.alert('delete Favorite?','are you sure you wish to delete the favorite dish' +
                    [
                        {
                            text:'Cancel',
                            onPress:()=>console.log(item.name+'Not Delete !!'),
                            style:'cancel'
                        },
                        {
                                text:'Ok',
                                onPress:()=>this.props.deleteFavorite(item.id)

                        }
                    ],
                    {cancelable:false}
                    );
                }
            }
        ];

            return (
            
            <Swipeout right = {rightButton} autoClose={true}>
            <Animatable.View animation="fadeInRightBig" duration={2000}>
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron = {true}
                    onPress={()=>navigate('Dishdetail',{dishId:item.id})}
                    leftAvatar={{source:{uri:baseUrl+item.image}}}
                    />
                    </Animatable.View>
            </Swipeout>
            );
        };
        if(this.props.dishes.isLoading){
            return(
                <Loading/>
            );
        }
        else if(this.props.dishes.errMess){
            return(
                <View>
                    <Text>{this.props.dishes.errMess}</Text>
                </View>
            );
        }
        else {
            return(
                <FlatList
                    //intinya dia ngecek list dish nah tiap dish nanti dicek apa dishId nya ini ada di favorite array ?? kalau dah nanti
                    data={this.props.dishes.dishes.filter(dish=>this.props.favorites.some(el=>el==dish.id))}
                    renderItem={renderMenuItem}
                    keyExtractor={item=>item.id.toString()}
                    />
            );
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);