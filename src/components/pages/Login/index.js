import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import TextInput from '../../atoms/TextInput';

const App = () => {
  const [welcome, setWelcome] = useState('Welcome');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Component Did Mount');
  }, []);

  useEffect(() => {
    console.log('component did update')
  }, [welcome])

  const handleSubmit = () => {
    setWelcome('Selamat Datang ');
    
    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);

  };


  console.log('Render component');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{welcome}</Text>
      <Gap height={40} />
      <TextInput
        value={userName}
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setUserName(e)}
        
      />
      <Gap height={24} />
      <TextInput
        value={password}
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Gap height={48} />
      <Button label="Sign in" onSubmit={handleSubmit} />
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
