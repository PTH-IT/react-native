/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



 import React, { Component } from 'react';
 import {
   StyleSheet,
   View,
   Button,
   Text
 } from 'react-native';
 import { connect } from 'react-redux';
 import { changeCount } from './action/counts';
 
class App extends Component {
  decrementCount() {
    let {changeCount, count} = this.props;
    count++
    changeCount(count);
  }
  incrementCount() {
    let {changeCount, count} = this.props;
    count--
    changeCount(count);
  }
  render() {
    const { count } = this.props;
    console.log(this.props)
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => (state.count
);


const mapDispatchToProps = (dispatch) => ({
  changeCount: (data) => {
    dispatch(changeCount(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App)