import 'react-native-gesture-handler';
import React, {useState, setState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen(props) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Workout Tracker</Text>
      <Button title="Track Miles" onPress={() => props.navigation.navigate('miles')}/>
      <Button title="Track Situps" onPress={() => props.navigation.navigate('situps')}/>
    </View>
  );
}

function MilesScreen(props) {
  const [miles, setMiles] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Miles Ran: {miles}</Text>
      <Button title="Add Mile" onPress={() => setMiles(miles + 1)}/>
      <Button title="Reset Miles" onPress={() => setMiles(0)}/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
    </View>
  );

}

function SitupScreen(props) {
  const [pushups, setSitups] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Situps: {situps}</Text>
      <Button title="Add 5 Situps" onPress={() => setSitups(situps + 5)}/>
      <Button title="Reset Situps" onPress={() => setSitups(0)}/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
    </View>
  );

}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="miles" component={MilesScreen}/>
        <Stack.Screen name="situps" component={SitupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}