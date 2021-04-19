import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../../molecules/Card';
import Axios from 'axios';
import Card2 from '../../molecules/Card2';
import Card3 from '../../molecules/Card3';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  console.log('test');
  useEffect(() => {
    // Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    // Axios
    Axios.get('https://reqres.in/api/users').then(
      res => setUsers(res.data.data),
      console.log(users),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <Card
            key={item.id}
            firstName={item.first_name}
            lastName={item.last_name}
            email={item.email}
            imageUrl={item.avatar}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
});
