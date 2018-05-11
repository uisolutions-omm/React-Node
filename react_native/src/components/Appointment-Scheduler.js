import React,{Component} from 'react'
import { TouchableOpacity,View,StyleSheet,TextInput,Image } from 'react-native';
import { Container, Header, Title, Content,  Button, Left, Right,Center, Body, Icon, Text, Form, Item, Input, Label,Footer, FooterTab, Badge } from 'native-base';
import DatePicker from 'react-native-datepicker'
import TimePicker from 'react-native-simple-time-picker';

export default class Appointment extends Component<Props> {
  constructor(props){
    super(props);
      this.state = {
        date:"",
        selectedHours: 0,
        selectedMinutes: 0,
        name:'',
        email:'',
        phone:'',
        slot_date:'',
        slot_time:[{selectedHours: 0,
                    selectedMinutes: 0
                  }]
      }
    }

    handleUserName = (text) => {
       this.setState({ name: text })
    }

    handleEmail = (text) => {
       this.setState({ email: text })
    }
    handlePhone = (text) => {
       this.setState({ phone: text })
    }


    _onValueChange = (hour, minute) => {
    console.log("Selected time:", hour, ':', minute);
  };
  loginSubmit = () => {
    console.log("submitDetails")

    var details = {
      "name":this.state.name,
      "email":this.state.email,
      "phone":this.state.phone,
      "slot_date":this.state.date,
      "slot_time":this.state.selectedHours

};
console.log(details)

var formBody = [];
for (var property in details) {
 var encodedKey = encodeURIComponent(property);
 var encodedValue = encodeURIComponent(details[property]);
 formBody.push(encodedKey + "=" + encodedValue);
}
console.log(formBody);
formBody = formBody.join("&");

    const loginData = fetch('http://165.227.126.29:8083/api/appointmentCreate', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
     },
     body: formBody

 })
 .then(function(res) {

   return res.json()

}).then(function(data) {
  console.log(data);
}).catch(function (err) {
       return err;
 });

}


  render(){
   const { selectedHours, selectedMinutes } = this.state;
    return(
      <View>
            <Header>
                <Body>
                  <Title>Appointment Schedule</Title>
                </Body>
             <Right />
           </Header>

           <DatePicker
                  style={{marginTop:15,width: 200, alignItems:'center',justifyContent: 'center'}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2018-05-01"
                  maxDate="2020-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 50
                    },
                    dateInput: {
                    marginLeft:100,width:200
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
          />
      <View style={{
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      flex: 0

                    }}>
      <Text style={{color: 'blue',marginTop:15}}>{selectedHours}:{selectedMinutes}</Text>
         <TimePicker
           selectedHours={selectedHours}
           selectedMinutes={selectedMinutes}
           onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
         />
      </View>

                <Form>
                       <Item floatingLabel>
                         <Label>Username</Label>
                         <Input onChangeText = {this.handleUserName.bind(this)}/>
                       </Item>
                       <Item floatingLabel last>
                         <Label>Email</Label>
                         <Input onChangeText = {this.handleEmail.bind(this)}/>
                       </Item>
                       <Item floatingLabel last>
                         <Label>Mobile</Label>
                         <Input onChangeText = {this.handlePhone.bind(this)}/>
                       </Item>
              <Button style={{
                        marginTop:15,
                        marginLeft:100,
                        width:200,
                        backgroundColor:'#2658d3'
                      }}   onPress={this.loginSubmit.bind(this)}>
                      <Text style={{marginLeft:60,color:'white'}} > LOGIN </Text>
              </Button>

                </Form>



       </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
