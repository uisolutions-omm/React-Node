import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Text,
  View,Image
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { SocialIcon, Icon } from 'react-native-elements'


export default class Login extends Component {

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
                    <Input  placeholder='Email/Mobile'   />
                  </Item>
               <Item regular style={{marginTop:15,marginLeft:10,marginRight:10,backgroundColor:'#f7f7fc'}}>
                 <Input  secureTextEntry = {true} placeholder='Password'  />
               </Item>

              <View style ={{ flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',}}>
               <Button style={{marginTop:15,marginLeft:0,width:200,backgroundColor:'#2658d3'}}><Text style={{marginLeft:60,color:'white'}} > LOGIN </Text></Button>
               <Button bordered style={{marginTop:15,marginLeft:10,width:180}}><Text style={{marginLeft:60,color:'blue'}}> SIGNUP </Text></Button>
              </View>
        </Form>
        <View style ={{ flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:180,

            }}>

          <SocialIcon  light  type='facebook' size={30}  />
          <SocialIcon  light  type='google' size={30}  />
          <SocialIcon light  type='twitter' size={30} />
       </View>

       <Button bordered style={{marginTop:100,marginLeft:15,marginRight:10,width:380}}><Text style={{marginLeft:120,color:'blue'}} > FORGOT PASSWORD </Text></Button>
    </View>
    );
  }
}
