import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex.09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Resort from './screens/week3/Resort';
import Travel from './screens/week3/Travel';
import Health from './screens/week5/Health';
import Home from './screens/week6/Home';
import FlatListExample from './screens/week6/FlatListExample';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';
import ChartKitScreen from './screens/week5/ChartKitScreen';
import { AuthContextProvider } from './hooks/AuthContextProvider';

export default function App() {
  return (
    <AuthContextProvider>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    </AuthContextProvider>
     //<HomeStack />
      //<ChartKitScreen />
     //<BottomTab />
    //<FlatListExample/>
    //<Home/>
    //<Health />
    //<Resort />
    //<Travel />
    //<Welcome/ >
    //<Ex01 />
    //<Ex02 />
    //<Ex03 />
    //<Ex04 />
    //<Ex05 />
    //<Ex06 />
    //<Ex07 />
    //<Ex08 />
    //<Ex09 />
    //<Ex10 />
    //<Ex11/>
    //<Ex12/>
  );
}
