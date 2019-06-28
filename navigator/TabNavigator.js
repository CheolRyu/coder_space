/* eslint-disable eqeqeq */
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Homescreens from '../screens/Homescreens';
import SectionScreen from '../screens/SectionScreen';
import { Icon } from 'expo';
import ProductScreen from '../screens/ProductScreen';
import SurveyScreen from '../screens/SurveyScreen';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator(
  {
    Home: Homescreens,
    Section: SectionScreen
  },
  {
    mode: 'modal'
  }
);
HomeStack.navigationOptions = ({ navigation }) => {
  // eslint-disable-next-line no-var
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == 'Section') {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: 'HOME',
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons name="ios-home" size={26} color={focused ? activeColor : inactiveColor} />
    )
  };
};

const ProductStack = createStackNavigator({
  Explore: ProductScreen
});
ProductStack.navigationOptions = {
  tabBarLabel: 'OUR PRODUCTS',
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons name="ios-cube" size={26} color={focused ? activeColor : inactiveColor} />
  )
};

const SurveyStack = createStackNavigator({
  Survey: SurveyScreen
});

SurveyStack.navigationOptions = {
  tabBarLabel: 'SURVEY',
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons name="ios-clipboard" size={26} color={focused ? activeColor : inactiveColor} />
  )
};
const TabNavigator = createBottomTabNavigator({
  HomeStack,
  ProductStack,
  SurveyStack
});

export default TabNavigator;
