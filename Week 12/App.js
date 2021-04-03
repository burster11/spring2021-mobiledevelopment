import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function App() {
  const [pet, setPet] = useState();

  const [votes, setVotes] = useState(false);

  function increaseForkVote(value){
    setPet(value);
    setVotes(true);
  }

  function increaseSpoonVote(value){
    setPet(value);
    setVotes(true);
  }

  function increaseKnifeVote(value){
    setPet(value);
    setVotes(true);
  }

  return (
    <View style={styles.container}>
      { votes ? (
      <View style={styles.container}>
        <Text>Voted for {utensil}!</Text>
      </View>
      ) : (
        <View>
        <Text style={styles.headerText}>Vote for your favorite utensil:</Text>
        <Card.Divider/>
        <Card>
          <Button title="Forks" onPress={(value) => (increaseForkVote('forks'))}/>
        </Card>
        <Card>
          <Button title="Spoons" onPress={(value) => (increaseSpoonVote('spoons'))}/>
        </Card>
        <Card>
          <Button title="Knives" onPress={(value) => (increaseKnifeVote('knives'))}/>
        </Card>
        </View>
    )
    }
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
