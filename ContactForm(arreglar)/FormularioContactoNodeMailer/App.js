import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, Button, Text, Form, Title, Label} from 'native-base';
import { Alert } from 'react-native'
import axios from 'axios'

class App extends Component {
  state = {
    email: '',
    subject: '',
    messages: '',
  }

  sending() {
    var url = `http://192.168.5.99:3410/testsend`;
        axios.post(url,{
          Email: this.state.email,
          Judul: this.state.subject,
          Isi: this.state.messages
        }).then((x)=>{
          alert(x.data)
        }).catch((y)=>{alert(y.data)})
  }

  render() {

    return (
      <Container>
        <Header>
            <Title style={{fontSize:25}}>React Native ❤ Nodemailer</Title>
          </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> To  </Label><Input onChangeText={(x)=>{this.setState({email: x})}}/>
            </Item>
            <Item floatingLabel>
              <Label> Subject </Label><Input onChangeText={(x)=>{this.setState({subject: x})}}/>
            </Item>
            <Item floatingLabel>
              <Label> Messages </Label><Input onChangeText={(x)=>{this.setState({messages: x})}} />
            </Item>
            <Text>{"\n"}</Text>
            <Button block
            onPress={()=>{this.sending()}}>
              <Text>
                🎁🎁 SEND EMAIL 🎁🎁
              </Text>
            </Button>
          </Form>
          <Text style={{textAlign: 'center', fontSize:10}}>
          {"\n"}
            Email Will be sent from
          </Text>
          <Text style={{textAlign: 'center', fontSize:10}}>
            auregaputra@gmail.com💖
          </Text>
        </Content>
      </Container>
    );
  }
}
export default App;