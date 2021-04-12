import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import TextInput from '../../atoms/TextInput';

const Registration = () => {
  const [welcome, setWelcome] = useState('Registration');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(() => {
    console.log('Component Did Mount');
  }, []);

  useEffect(() => {
    console.log('component did update');
  }, [welcome]);

  const handleSubmit = () => {
    // setWelcome('Welcome');

    const data = {
      name: name,
      userName: userName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };
    console.log(data);
  };

  console.log('Render component');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{welcome}</Text>
      <Gap height={40} />
      <TextInput
        value={name}
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={e => setName(e)}
      />
      <Gap height={20} />
      <TextInput
        value={userName}
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setUserName(e)}
      />
      <Gap height={24} />
      <TextInput
        value={email}
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Gap height={24} />
      <TextInput
        value={address}
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={e => setAddress(e)}
      />
      <Gap height={24} />
      <TextInput
        value={phoneNumber}
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={e => setPhoneNumber(e)}
        keyboardType="numeric"
      />
      <Gap height={30} />
      <Button label="Register" onSubmit={handleSubmit} />
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

export default Registration;
