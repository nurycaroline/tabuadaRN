// @flow

import React, { Component } from 'react';
import {
	View,
	Dimensions,
  Text,
  StyleSheet
} from 'react-native';
import { config } from '../Config';
import Form from './Form';
const window = Dimensions.get('window');

export default class Tabuada extends Component {
  render() {
		let array = [0,1,2,3,4,5,6,7,8,9,10];
  	let numero = this.props.numero;

    return (
			<View>
				{
					(numero === 1 || numero === 7) && 
						<Form />
				}

				<View style={[{backgroundColor: config[numero]}, styles.view]}>
					{
						array.map(num => {
							return (
								<View key={num}>
									<Text style={styles.text} >{numero} * {num} = <Text style={styles.resultado}>{numero*num}</Text></Text>
								</View>
							);
						})
					}
				</View>
			</View>
      
    );
  }
}

const styles = StyleSheet.create({
	view: {
		flex: 1, 
		justifyContent: 'center',
		width: window.width,
		alignItems: 'center',
	},
	text: {
		fontSize: 25,
	},
	resultado: {
		fontWeight: 'bold',
		fontSize: 30
	}
});
