// @flow

import React, { Component } from 'react';
import SideMenu from  'react-native-side-menu'
import Menu from './Menu';
import Button from './Button';
import Tabuada from './Tabuada';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default class App extends Component {
  state = {
    isOpen: false,
    selectedItem: '1',
  };

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    let menu = <Menu onItemSelected={this.onMenuItemSelected} /> ;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.setState({ isOpen })}>
        
        <View style={styles.container}>
					{
						this.state.selectedItem == 'About' &&
						 <Text> ABOUT </Text>
					}

          {
            !isNaN(this.state.selectedItem) && 
              <Tabuada numero={+this.state.selectedItem} />
          }
				</View>

        <Button onPress={() => this.setState({isOpen: !this.state.isOpen})}>
          <Image source={require('../assets/img/menu.png')} style={{width: 150, height: 150}} />
        </Button>
      </SideMenu>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
