import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TrailList from './components/trailList';
import TrailListItem from './components/trailListItem';

const RootStack = createStackNavigator(
  {
    Home: TrailList,
    Details: TrailListItem,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Arizona State Trails',
      headerStyle: {
        backgroundColor: '#8c1d40',
      },
      headerTintColor: '#ffc627',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
