import React, { Component } from 'react';
import {
	Alert,
	View,
  Text,
  StyleSheet,
  TextInput,
	Dimensions
} from 'react-native';
const window = Dimensions.get('window');

export default class Clima extends Component {
	constructor(props) {
    super(props);
    this.state = {
      latitude: '-26.9048545',
			longitude: '-49.0906924',
			api: 'f501433a929c68f8b6ea479984c637bf',
			nome: '', 
			tempo: '', 
			temperatura: ''
    };
  }
	
	
	componentWillMount(){
		let {latitude, longitude, api} = this.state;
		let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt&appid=${api}`;
		debugger;

		fetch(url).then(response =>  {
			return response.json();
		}).then(response => {
			debugger;
			this.setState({nome: response.name, tempo: response.weather[0].description, temperatura: (response.main.temp - 273).toFixed(2) });
		})
	}

  render() {	
    return (
			<View style={styles.clima}>
				<Text style={styles.text}>{this.state.nome}</Text>
				<Text style={styles.text}>{this.state.tempo}</Text>
				<Text style={styles.temperatura}>{this.state.temperatura}°</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	clima: {
	},
	text: {
		fontSize: 25,
	},
	temperatura: {
		fontWeight: 'bold',
		fontSize: 30
	}
});
