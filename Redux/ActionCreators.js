import * as ActionTypes from './ActionTypes';
import {baseUrl} from './shared/baseUrl';
import { comments } from './comments';
import { leaders } from './leaders';

export const fetchComments = ()=> (dispatch)=>{

    return fetch(baseUrl + 'comments')
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var error=new Error("error woy"+ response.status+': '+response.statusText);
            error.response=response;
            throw error;            
        }
    },
    error => {
        var error=new Error(error.message);
        throw errMess;        
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error=>dispatch(commentsFailed(error.message)))

};

export const commentsFailed = (errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments = (comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

//dishes start
export const fetchDishes =() => (dispatch)=>{
    dispatch(dishesLoading());

    return fetch(baseUrl + 'dishes')
    .then(response=>{
        if(response.ok){
        return response;
    }

    else {
        var error = new Error('Error' + response.status +':' + response.statusText);
        error.response= response;
        throw error;
    }
},

error =>{
    var error = new Error (error.message)
    throw errMess;
})
.then(response => response.json())
.then(promos => dispatch(addPromos(promos)))
.catch(error =>dispatch(promosFailed(error.message)))
};

export const dishesLoading = () =>
({

    type:ActionTypes.DISHES_LOADING,
});

export const dishFailed = (errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes = (dishes)=>({

    type:ActionTypes.ADD_DISHES,
    payload:dishes
});

//dishes end

//promotions start
export const fetchPromos = () =>(dispatch)=>{
    dispatch(promosLoading());
    return fetch(baseUrl+'promotions')
    .then(response=>{
        if(response.ok){
        return response;
    }
    else{
        var error = new Error('errorr'+response.status+':'+response.statusText);
        error.response=response;
        throw error;        
       }
    },  
    error =>{
        var error = new Error(error.message);
        throw errMess;
    })
    .then(response =>response.json())
    .then(promos=>dispatch(addPromos(promos)))
    .catch(error=>dispatch(promosFailed(error.message)))  
};

export const promosLoading = () =>({
    type:ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const addPromos = (promos) =>({
    type:ActionTypes.ADD_PROMOS,
    payload:promos
});
//promotions end

//leaders start
export const fetchLeaders = () =>(dispatch)=>{
    dispatch(leadersLoading());
    return fetch(baseUrl + 'leaders')
    .then(response=> {
        if(response.ok){
            return response;
        }
        else{
            var error=new Error('Error' + response.status+':'+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error=>{
        var error = new Error(error.message)
        throw errMess;
    })
    .then(response=>response.json())
    .then(leaders=>dispatch(addLeaders(leaders)))
    .catch(error=> dispatch(leadersFailed(error.message)))
    };

export const leadersLoading =() =>({
    type:ActionTypes.LEADERS_LOADING,

});

export const leadersFailed = (errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
});

export const addLeaders = (leaders) => ({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});
//leaders end
