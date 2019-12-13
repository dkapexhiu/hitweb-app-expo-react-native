import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { white } from 'ansi-colors';

export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('./assets/hw.png')} style={{flex: 1}} >
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Home')}>Home</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('News')}>News</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Contact')}>Contact</Text>
                </View>
            </View>
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5F2B8',
        height: '100%'
    },
    headerContainer: {
        height: 150,
        width: 180,
        borderBottomColor: 'chocolate',
        borderBottomWidth: 2,
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
      color: 'chocolate',
      fontWeight: 'bold'
    }
});