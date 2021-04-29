import 'react-native-gesture-handler';
import React, {useState, setState} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Timer from './components/Timer.js';

function HomeScreen(props) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text h1 style={{borderBottom: "1px solid #000000"}}>Excercise Tracker</Text>
      <Button title="Track Laps" onPress={() => props.navigation.navigate('laps')} style={{ padding: "10px" }}/>
      <Button title="Track Situps" onPress={() => props.navigation.navigate('situps')} style={{ padding: "10px" }}/>
      <Button title="Track Miles" onPress={() => props.navigation.navigate('distance')} style={{ padding: "10px" }}/>
      <Button title="Track Steps" onPress={() => props.navigation.navigate('steps')} style={{ padding: "10px" }}/>
    </View>
  );
}

function LapsScreen(props) {
  const [laps, setLaps] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text h2 style={{borderBottom: "1px solid #000000"}}>Laps Ran: {laps}</Text>
      <Button title="Add Lap" onPress={() => setLaps(laps + 1)} style={{ padding: "10px" }}/>
      <Button title="Reset Laps" onPress={() => setLaps(0)} style={{ padding: "10px" }}/>
      <Timer/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')} style={{ paddingTop: "25px" }}/>
    </View>
  );

}

function SitupScreen(props) {
  const [situps, setSitups] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text h2 style={{borderBottom: "1px solid #000000"}}>Situps: {situps}</Text>
      <Button title="Add 10 Situps" onPress={() => setSitups(situps + 10)} style={{ padding: "10px" }}/>
      <Button title="Reset Situps" onPress={() => setSitups(0)} style={{ padding: "10px" }}/>
      <Timer/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')} style={{ paddingTop: "25px" }}/>
    </View>
  );

}

function exercisingScreen(props) {
  const [miles, setMiles] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text h2 style={{borderBottom: "1px solid #000000"}}>Miles Ran: {miles}</Text>
      <Button title="+1.0 Mile" onPress={() => setMiles(miles + 1)} style={{ padding: "10px" }}/>
      <Button title="+0.5 Mile" onPress={() => setMiles(miles + .5)} style={{ padding: "10px" }}/>
      <Button title="+0.25 Mile" onPress={() => setMiles(miles + .25)} style={{ padding: "10px" }}/>
      <Button title="Reset Miles" onPress={() => setMiles(0)} style={{ padding: "10px" }}/>
      <Timer/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')} style={{ paddingTop: "25px" }}/>
    </View>
  );

}

function StepsScreen(props) {
  const [steps, setSteps] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text h2 style={{borderBottom: "1px solid #000000"}}>Steps Taken: {steps}</Text>
      <Button title="+100" onPress={() => setSteps(steps + 100)} style={{ padding: "10px" }}/>
      <Button title="+10" onPress={() => setSteps(steps + 10)} style={{ padding: "10px" }}/>
      <Button title="Reset Steps" onPress={() => setSteps(0)} style={{ padding: "10px" }}/>
      <Timer/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')} style={{ paddingTop: "25px" }}/>
    </View>
  );

}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="laps" component={LapsScreen}/>
        <Drawer.Screen name="situps" component={SitupScreen}/>
        <Drawer.Screen name="distance" component={exercisingScreen}/>
        <Drawer.Screen name="steps" component={StepsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;