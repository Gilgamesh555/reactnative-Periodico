import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home'
import TestCollapse from './screen/TestCollapse'
import News from './screen/News'
import NewsDetails from './screen/NewsDetails'
import Live from './screen/Lives'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Noticias" component={Draw} />
      <Tab.Screen name="NewsDetails" component={NewsDetails} />
      <Tab.Screen name="Live" component={Live} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const Draw = ({route, navigation}) => {
  return (
      <Drawer.Navigator drawerContent={props => <TestCollapse {...props}/>}>
        <Drawer.Screen name="Menu" component={News} />
      </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}