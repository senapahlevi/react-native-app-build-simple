import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList,Modal,Button } from 'react-native';
import { Card, Icon,Rating,AirbnbRating,Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import {postFavorite} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites:state.favorites,
    }
};

const mapDispatchToProps = dispatch => ({
    postFavorite:(dishId)=> dispatch(postFavorite(dishId)),
    postComments:(dishId,comment,rating,author)=>dispatch(postComments(dishId,comments,rating,author)),
});

function RenderDish(props) {
    const dish = props.dish;

    if (dish != null) {
        return(
            <Card
                featuredTitle={dish.name}
                image={ {uri: baseUrl + dish.image}}
                >
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
                <Icon 
                    raised
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o' }
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorited') : props.onPress()}
                    />
            </Card>
        );
    }
    else {
        return(<View></View>)
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return(
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'--' + item.author + ', ' + item.date}</Text>
            </View>
        );
    }
    
    if (comments != null) {
        return(
            <Card title="Comments" >
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={item => item.id.toString()}
                    />
            </Card>
        );
    }
    else {
        return(<View></View>)
    }
}

class Dishdetail extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            favorites: [], // dishId selected by user
        };
    };

    markFavorite(dishId) {
        this.props.postFavorite(dishId);    }

    static navigationOptions = {
        title: 'Dish Details'
    };

        
    defaultState(){
        return({
            rating:3,
            author:'',
            comment:'',
            showCommentForm:false,
        })
    }

    handleComment(dishId){
    this.props.postComment(dishId,this.state.rating,this.state.author,
    this.state.comment);
    this.resetCommentForm();
    }

    openCommentForm(){
        this.setState({showCommentForm:true})
    }

    setRating(rating){
        this.setState({rating})
    }

    setAuthor(author){
        this.setState({author})
    }

    setComment(comment){
        this.setState({comment})
    }
    
    render() {
        const dishId = this.props.navigation.getParam('dishId','');

        return(
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]} 
                    favorite={this.state.favorites.some(el => el === dishId)}
                    markFavorite={()=>this.markFavorite(dishId)}
                    openCommentForm={()=>this.openCommentForm}/>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showCommentForm}
                        onDismiss={()=>{this.resetCommentForm()}}
                        onRequestClose={()=>{this.resetCommentForm()}}
                        >
                        <View style ={styles.modal}>
                            <Text style={style.modalTitle}>Add Your Comment Here</Text>
                            <Rating 
                                minValue={1}
                                startingValue={3}
                                fractions={0}
                                showRating={true}
                                onFinishRating={(rating)=>this.setRating(rating)}
                                />
                                <Input 
                                    placeholder="Author"
                                    leftIcon={
                                        <Icon
                                            name='user'
                                            type='font-awesome'
                                            />
                                    }
                                    onChangeText={(author)=>this.setAuthor(author)}
                                    />
                                    <Input
                                        placeholder="comment"
                                        leftIcon={
                                            <Icon
                                                name='comment'
                                                type='font-awesome'
                                                />
                                        }
                                        onChangeText={(comment)=>this.setComment(comment)}
                                        />
                                        <Button
                                            onPress ={()=>{this.handleComment(dishId)}}
                                            color='#512DA8'
                                            title='SUBMIT'
                                        />
                                        <Button
                                            onPress={()=>{this.resetCommentForm()}}
                                            color='#6c757d'
                                            title='CANCEL'
                                        />
                        </View>
                        </Modal>
                        <RenderComments
                    onPress={() => this.markFavorite(dishId)} />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        margin:25,
    },
    // Note formLabel and formItem will be inside formRow 
    // so the flexDirection will be row, and formLabel will be 2x size formItem

    formLabel:{
        fontSize:20,
        flex:2,
    },
    formItem:{
        flex:1,
    },
    modal:{
        justifyContent:'center',
        margin:20,
    },
    modalTitle:{
        fontSize:24,
        fontWeight:'bold',
        backgroundColor:'#512DA8',
        textAlign:'center',
        color:'white',
        marginBottom:29,
    },
    modalText:{
        fontSize:18,
        margin:10,
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(Dishdetail);