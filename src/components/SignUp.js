import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Text,
  View,Image
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class SignUp extends Component {

  render() {
    return (
        <View>
        <Image style={{ left: 100, marginTop:100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 200,
                        height: 50
                      }}

             source={require("Project2/Images/parkeze.png")}

         />

        <Form>
                  <Item regular style={{marginTop:50,marginLeft:10,marginRight:10,backgroundColor:'#f7f7fc'}}>
                    <Input  placeholder='Email'   />
                  </Item>
                  <Item regular style={{marginTop:15,marginLeft:10,marginRight:10,backgroundColor:'#f7f7fc'}}>
                    <Input   placeholder='Name'  />
                  </Item>
               <Item regular style={{marginTop:15,marginLeft:10,marginRight:10,backgroundColor:'#f7f7fc'}}>
                 <Input  secureTextEntry = {true} placeholder='Password'  />
               </Item>


        </Form>


       <Button bordered style={{marginTop:100,marginLeft:15,marginRight:10,width:380}}><Text style={{marginLeft:160,color:'blue'}} > SUBMIT </Text></Button>
    </View>
    );
  }
}
