import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Splash from "../screens/Splash";
import Indonesia from "../screens/Indonesia";
import KasusBaru from "../screens/KasusBaru";
import Provinsi from "../screens/Provinsi";
import Harian from "../screens/Harian";

//import tema
import * as theme from '../Theme';

const Stack = createStackNavigator();

function Corona(route) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true
        }}
        initialRouteName="Splash"
        headerMode="screen"
        screenOptions={{
            headerTintColor : 'white',
            headerStyle : {
                backgroundColor: theme.colors.background_secondary
            },
        }}
      >
        <Stack.Screen 
            name="Home" 
            component={Home} 
            screenOptions="default" 
            options={{
                title: 'Covid-19',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerLeft: null,
            }}
            />

        <Stack.Screen 
          name="Detail" 
          component={Detail} 
          options={({ route }) => ({
            title: route.params.pilneg,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          })}
          />

        <Stack.Screen 
          name="Splash" 
          component={Splash} 
          header = {null}
          headerMode = "none"
          options={({ route }) => ({
            title: '',
            headerStyle:{
              backgroundColor: theme.colors.background
            }
          })}
          />

        <Stack.Screen 
            name="Indonesia" 
            component={Indonesia}
            options={{
                title: 'Indonesia Status',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}
            />

        <Stack.Screen 
            name="KasusBaru" 
            component={KasusBaru}
            options={{
                title: 'Kasus Baru Detail',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}
            />

        <Stack.Screen 
            name="Provinsi" 
            component={Provinsi}
            options={{
                title: 'Data Provinsi Detail',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}
            />

        <Stack.Screen 
            name="Harian" 
            component={Harian}
            options={{
                title: 'Data Harian Detail',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}
            />
          

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Corona;
