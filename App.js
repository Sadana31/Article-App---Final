
import React from "react";
import HomeScreen from "./Home";
import RecommendedMoviesScreen from "./Recommendation";
import PopularMoviesScreen from "./Popular";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppTopNavigtor = createMaterialTopTabNavigator({
  RecommendedMovies: {
    screen: RecommendedMoviesScreen,
    navigationOptions:{
      tabBarLabel: "Recommended Movies",
      tabBarOptions: {
        tabStyle: {backgroundColor: "white"},
        labelStyle: {color:"#000"},
        indicatorStyle: {backgroundColor: "black"}
      }
    }
  },

  PopularMovies: {
    screen: PopularMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Popular Movies",
      tabBarOptions: {
        tabStyle: {backgroundColor: "white"},
        labelStyle: {color:"#000"},
        indicatorStyle: {backgroundColor: "black"}
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },

  AppTopNav: {
    screen: AppTopNavigation,
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "#fff",
      headerTitle: "Recommended Movies",
      headerStyle: {backgroundColor: "#b500f9"},
      headerTitleStyle: {color: "white" , fontWeight: "bold" , fontSize: RFValue(18)}
    }
  }
},
{
  initialRouteName: "Home"
}
)

const AppContainer = createAppContainer(AppStackNavigator)





