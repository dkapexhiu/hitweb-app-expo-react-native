import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, WebView } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; 
import drawerContentComponents from './drawerContentComponents';

class HeaderNavigationBar extends Component {
    render() {
        return (<View style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'chocolate'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                onPress={() => { this.props.navigation.openDrawer() }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}}
                />
            </TouchableHighlight>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white', marginLeft:'auto', marginRight:'auto', marginTop: 15 }}>
              HitWeb
            </Text>
        </View>);
    }
}

export class HomeScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
            <WebView
              source={{uri: 'https://hitweb.it/'}}
              style={{flex: 1}}
            />    
        </View>);
    }
}

export class NewsScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://hitweb.it/news/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class ContactScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://hitweb.it/contatto/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export default DrawerNavigator (
    {
      Home:{
        screen:HomeScreen
      },
      News:{
        screen:NewsScreen
      },
      Contact:{
        screen:ContactScreen
      }
    },{
        initialRouteName:'Home',
        contentComponent: drawerContentComponents
    }
)

