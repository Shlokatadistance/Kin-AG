import React from 'react';
import {Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native';
//I faced a major issue previously, with the entire import thing, now remember
// Class should have the same name as the file, in this case Inputs, that you are trying to 
//to iumport in app.js, also make sure that the export statment in your secodnary file is appropriate
//Again, imports need to mentioned everywhere
//Also to algin items , the entire view needs to be aligned with that stylesheet, not possible for individual components
//The method to create the extra routing methods is by creating this method of navigation, where you predefine the 
//The flow of the app, which is then embedded in the button methodology of the application

class Inputs extends Component{
	state={
		email: ' ',
		password : ' ',
	}
	handleEmail = (text) => {
		this.setState({email:text})
	}
	handlePassword = (text) => {
		this.setState({password:text})
	}
	login = (email,pass) => {
		alert('email:' + email + 'password:' +pass)
	}
	render(){
		return(

			<View style={styles.container}>
				<Text style={styles.Mainlogo} > Kin </Text>
				<TextInput style = {styles.input}
				underLineColor = "transparent"
				placeholder = "Email"
				PlaceholderTextColor = "#000000"
				autoCapitalize = "none"
				onChangeText = {this.handleEmail} />

				<TextInput style={styles.input}
				underLineColor = "transparent"
				placeholder = "Password"
				PlaceholderTextColor = "#000000"
				autoCapitalize = "none"
				onChangeText = {this.handlePassword} />

				<TouchableOpacity style={styles.submitButton}
				onPress={ () => this.login(this.state.email, this.state.password)} >
				<Text style={styles.submitButtonText}> Submit </Text>

				</TouchableOpacity>
			</View>
			)
	};
};
export default Inputs;

const styles = StyleSheet.create({
   container: {
      paddingTop: 300,
      justifyContent: 'center',
      alignItems: 'center',
   },
   Mainlogo:{
   	fontSize: 40,
   	fontFamily: 'Copperplate',
   	//justifyContent: 'center',
   	//alignItems: ' center',

   },
   input: {


      margin: 20,
      width : 300,
      height: 50,
      borderColor: '#0077FF',
      borderWidth: 1,
      borderRadius : 50,
      //justifyContent : 'center',
      alignSelf : 'center',
      //alignItems : 'center',
      //alignContent : 'center',
   },
   SomeText:{
   	alignSelf : 'center',
   },
   submitButton: {
      backgroundColor: '#0077FF',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
});