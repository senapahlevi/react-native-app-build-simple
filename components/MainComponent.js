import React, { Component } from 'react';
import {Platform , View } from 'react-native';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
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
    navigationOptions:{
        headerStyle:{
            backgroundColor:'#512DA8'
        },headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        }
    }
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

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    
    About:{
        screen:AboutNavigator,
        navigationOptions:{
            title:'About US',
            drawerLabel:'About US'
        }
    },
    
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }    
    },
    Contact:{
        screen:ContactNavigator,
        navigationOptions:{
            title:'Contact US',
            drawerLabel:'Contact US'
        }
    },
}, {
    drawerBackgroundColor: '#D1C4E9',
})

class Main extends Component {

    render() {
        return(
            <View style={{ flex:1}}>
                <MainNavigator />
            </View>
        )
    }
}

export default Main;
/*
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

