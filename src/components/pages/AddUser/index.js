import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import TextInput from '../../atoms/TextInput';
import Axios from 'axios';

const App = () => {
  const [welcome, setWelcome] = useState('Welcome');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log('Component Did Mount');
  }, []);

  useEffect(() => {
    console.log('component did update');
  }, [welcome]);

  const handleSubmit = () => {
    setWelcome('Selamat Datang ');
    const data = {
      email: email,
      userName: firstName,
      lastName: lastName,
    };
    Axios.post('http://localhost:3004/users', data);
    console.log(data);
  };

  console.log('Render component');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{welcome}</Text>
      <Gap height={40} />
      <TextInput
        value={email}
        label="Email"
        placeholder="Masukan Email"
        onChangeText={e => setEmail(e)}
      />
      <Gap height={24} />
      <TextInput
        value={firstName}
        label="First Name"
        placeholder="Masukan First name"
        onChangeText={e => setFirstName(e)}
      />
      <Gap height={24} />
      <TextInput
        value={lastName}
        label="Last Name"
        placeholder="Masukan Last name"
        onChangeText={e => setLastName(e)}
      />
      <Gap height={48} />
      <Button label="Tambah" onSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export default App;
