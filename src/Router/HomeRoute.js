import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../Screens/Home';
import NewRecipies from '../Screens/NewRecipies';
import Favroites from '../Screens/Favroites';
import RecipeDetail from '../Screens/RecipeDetail';

const HomeNavigator = createStackNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      }
  },
  NewRecipies: {
    screen: NewRecipies,
    navigationOptions: {
      headerShown: false
    }
  },
  Favroites: {
    screen: Favroites,
    navigationOptions: {
      headerShown: false
    }
  },
  RecipeDetail: {
    screen: RecipeDetail,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
    defaultNavigationOptions: {
        headerMode: 'none'
    }
});

export default createAppContainer(HomeNavigator);