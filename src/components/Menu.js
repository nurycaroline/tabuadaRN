import React, { Component } from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  Text,
	StyleSheet
} from 'react-native';
const window = Dimensions.get('window');
import { config } from '../Config';

export default class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    let tabs = Object.keys(config);

    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View>
          <Image
            style={styles.avatar}
            source={require('../assets/img/tabuada.png')} />
        </View>

        {
          tabs.map(num => {
            return (
              <Text key={num}
                onPress={() => this.props.onItemSelected(num)}
                style={styles.item}>
                Tabuada do {num}
              </Text>
            )
          })
        }

        <Text
          onPress={() => this.props.onItemSelected('Clima')}
          style={styles.item}>
          Clima em Blumenau
        </Text>

      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
	menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    flex: 1,
  },
  item: {
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 15,
  },
});