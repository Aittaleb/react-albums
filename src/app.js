import React , {Component } from 'react';
import {Text , View } from 'react-native';
// import {Provider} from 'react-redux';
// import {createStore } from 'redux';


import Button from './components/Button'

class App extends Component {
   
    render()
    {
                    return (
                        //<Provider store = {createStore()}>
                        <View >
                         <Text> Hello ! </Text>
                        </View>
                        //</Provider>
                            );

    }
   
}   

export default App ;