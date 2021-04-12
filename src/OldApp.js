import React, {Component} from 'react';
import {Button, Image, TextInput, ScrollView} from 'react-native';
import Title from './components/Title';

class App extends Component {
  state = {
    isShow: true,
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.state.isShow && <Title text="Product Detail" />}
        <Button
          title="test"
          onPress={() => this.setState({isShow: !this.state.isShow})}
        />
        {this.state.isShow &&<Image
          style={{width: 50, height: 50}}
          source={require('./assets/testss.jpg')}
        />}
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Input UserName"
          style={{
            borderWidth: 1,
            marginVertical: 10,
            marginHorizontal: 20,
            paddingLeft: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
      </ScrollView>
    );
  }
}

export default App;
