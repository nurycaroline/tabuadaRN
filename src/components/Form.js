// @flow

import React, { Component } from 'react';
import {
	Alert,
	View,
  Text,
  StyleSheet,
  TextInput,
	Dimensions
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
const window = Dimensions.get('window');

export default class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email: '',
			cep: ''
    };
  }

	validaCEP = () => {
		if(!this.refs['cep'].isValid()){
			Alert.alert('Alerta', 'Formato CEP inválido');
		}
	}

	validaEmail = () =>  {
		let email = this.state.email;
		let at = email.indexOf("@");
		var ponto = email.lastIndexOf(".");
		if (at<1 || ponto<at+2 || ponto+2>=email.length) {
				Alert.alert('Alerta', 'Formato de e-mail inválido');
				return false;
		}
	}

  render() {	
    return (
			<View style={styles.form}>
				<View>
					<Text>E-mail</Text>
					<TextInput
						onChangeText={(email) => this.setState({email})}
						style={{height: 40, borderColor: '#000', borderWidth: 1, width: 160}}
						value={this.state.email}
						onBlur={() => this.validaEmail()}
					/>
				</View>
				<View>
					<Text>CEP</Text>
					<TextInputMask
						ref={'cep'}
						type={'zip-code'}
						style={{height: 40, borderColor: '#000', borderWidth: 1, width: 100}}
						onBlur={() => this.validaCEP()}
					/>
				</View>

			</View>
    );
  }
}

const styles = StyleSheet.create({
	form: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#FFF',
		opacity: 0.5,
		margin: 0,
		paddingTop: 80,
		width: window.width,
		height: 180
	}
});
