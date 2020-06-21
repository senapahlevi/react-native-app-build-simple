import React, { Component } from 'react';
import {Text,Platform,ScrollView,Image,StyleSheet,View } from 'react-native';
import{Icon, ThemeConsumer} from 'react-native-elements';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { createDrawerNavigator, createStackNavigator,DrawerItems,SafeAreaView } from 'react-navigation';
import {connect} from 'react-redux';
import{fetchComments,fetchDishes,fetchLeaders,fetchPromos} from '../Redux/ActionCreators';

const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        comments:state.comments,
        promotions:state.promotions,
        leaders:state.leaders
    }
}
const mapDispatchToProps=dispatch=>({
    fetchDishes:()=>dispatch(fetchDishes()),
    fetchComments:()=>dispatch(fetchDishes),
    fetchLeaders:()=>dispatch(fetchLeader()),
    fetchPromos:()=>dispatch(fetchPromos()),
});

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
    navigationOptions:({navigation})=>({ //navigationoptions can be an object or be function that takes in prosp
        headerLeft:<Icon name='menu' size={24}
        color='red'
        onPress={()=>navigation.toogleDrawer()}
        />

}) },

    Dishdetail: { screen: Dishdetail }, 
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const AboutNavigator = createStackNavigator({
    About :{screen:About},
},{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#512DA8'
        },headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        },
        headerLeft:<Icon name='menu' size={24}
        color='white'
        onPress={()=>navigation.toogleDrawer()}/>

    })
});




const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});


const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
}, {
    navigationOptions: ({navigation})=>({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft:<Icon name='menu' size={24}
        color='white'
        onPress={()=>navigation.toogleDrawer()}/>
    })
});

const CustomDrawerContentComponent=(props)=>(
    <ScrollView>
        <SafeAreaView style={styles.container}
        forceInset={{top:'always',horizontal:'never'}}>
        <View style={styles.drawerHeader}>
                <View style={{flex:1}}>
                    <Image source ={require('./images/logo.png')}
                    style={styles.drawerImage}/>
                </View>
                        <View style={{flex:2}}>
                            <Text style={styles.drawerHeaderText}>
                                Restorant van den 
                            </Text>
                        </View>
        </View>
        <DrawerItems{...props}></DrawerItems>
    </SafeAreaView>  
</ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon:({tintColor})=>(
                <Icon 
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
                )
        }
    },
    
    About:{
        screen:AboutNavigator,
        navigationOptions:{
            title:'About US',
            drawerLabel:'About US',
            drawerIcon:({tintColor})=>(
            <Icon
                name='info=circle'
                type='font-awesome'
                size={24}
                color={tintColor}/>
            )
        }
    },
    
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon:({tintColor})=>(
                <Icon 
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }    
    },
    Contact:{
        screen:ContactNavigator,
        navigationOptions:{
            title:'Contact US',
            drawerLabel:'Contact US',
            drawerIcon:({tintColor})=>(
                <Icon
                    name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                    />
            )
        }
    },
}, {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent:CustomDrawerContentComponent,
})

class Main extends Component {

    componentDidMount(){
        this.props.fetchComments();
        this.props.fetchDishes();
        this.props.fetchLeaders();
        this.props.fetchPromos();
    }

    render() {
        return(
            <View style={{ flex:1}}>
                <MainNavigator />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    drawerHeader:{
        backgroundColor:'#512DA8',
        height:140,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
    },
    drawerHeaderText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
    },
    drawerImage:{
        margin:10,
        width:80,
        height:60,
    }
})

export default connect (mapStateToProps,mapDispatchToProps)(main);



/* just commentar
//ini part 3
import React, { Component } from 'react';
import { Button, View, Platform } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';

const MenuNavigator = createStackNavigator();

const HeaderOptions = {
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff"            
    }
};

function MenuNavigatorScreen() {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail"}}
            />            
        </MenuNavigator.Navigator>
    );
}

const HomeNavigator = createStackNavigator();


function HomeNavigatorScreen() {
    return(
        <HomeNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />
        </HomeNavigator.Navigator>
    );
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
    return(
        <MainNavigator.Navigator 
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#D1C4E9'
            }}
        >
            <MainNavigator.Screen name="Home" component={HomeNavigatorScreen} />
            <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen} />
        </MainNavigator.Navigator>
    );
}

class Main extends Component {

  render() {
 
    return(
        <NavigationContainer>
            <MainNavigatorDrawer/>
        </NavigationContainer>
    );
  }
}
  
export default Main;
//PART 3////////////////
/*import React, {Component} from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';

const MenuNavigator = createStackNavigator (
  {
    Menu:{screen:Menu},
    Dishdetail:{screen: Dishdetail}
  },
      {
      initialRouteName:'Menu',
      navigationOptions:{
      headerStyle:{
      backgroundColor:'#512DA8'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        color:'#fff'
    }
  }
});


class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        };
    }

    render(){
        return(
            <View style={{flex:1}}>
        <Menu dishes={this.state.dishes}onPress={(dishId)=>
        this.onDishSelect(dishId)} />
        <Dishdetail dish = {this.state.dishes.filter((dish)=>dish.id== 
        this.state.selectedDish)[0]}/>
    </View>
        );
    }
}
export default Main;


/*const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen(){
    return(
        <HomeNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
           >
            <HomeNavigator.Screen
                name='Home'
                component={Home}/>
            
           </HomeNavigator.Navigator>
            );
        }
*/
/*const MainNavigator = createDrawNavigator();

function MainNavigatorScreen(){
    return( 
        <MainNavigator.Navigator
        initialRouteName='Home'
        drawStyle={{
            backgroundColor:'#D1C4E9'
        }}
        >
        <MainNavigator.screen
        name='Home'
        component={HomeNavigator}
        />
        <MainNavigator.screen
        name='Menu'
        component={MenuNavigatorScreen}
        />
        </MainNavigator.Navigator>
    );
}

*/

