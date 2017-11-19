/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {connect} from 'react-redux'
import { fetchPeopleFromAPI } from './actions'

const {isFetching, people} = props.people

export default class App extends Component {
  render() {
    return (
      <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button} onPress={() => props.getPeople()}>
        <Text style={buttonText}>Load People</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <View key={i} >
              <Text>Name: {person.name}</Text>
              <Text>Birth Year: {person.birth_year}</Text>
            </View>
          })
        ) : null
      }
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
}
});

mapStateToProps = (state) => 
{
  return {people: state.people}
}
mapDispatchToProps = (dispatch) => {
  return { getPeople : () => dispatch(fetchPeopleFromAPI())}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)