import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Button } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={Num1:0, Num2:0};
  }
  Div=()=>{
    var N1=parseInt (this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var result = N1%N2;
    if (result == 0){
      alert('Число '+N1+' делится без остатка на число ' +N2);
    }
    else {
      alert('Число '+N1+' не делится без остатка на число ' +N2+ ' Остаток равен ' +result);
    }
    
  }
  render(){
    return(
      <View style ={styles.block}>
        <TextInput style={{borderWidth:1, margin:20 }} placeholder="Num1" onChangeText={Num1=>this.setState({Num1})}/>
        <TextInput style={{borderWidth:1, margin:20}} placeholder="Num2" onChangeText={Num2=>this.setState({Num2})}/>
        <Button
        color="#030101"
        title="Проверка деления" onPress={this.Div} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block:{
    paddingVertical: 30
  }
})
