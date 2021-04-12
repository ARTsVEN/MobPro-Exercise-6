import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card2 from '../../molecules/Card2';
import Axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  console.log('test');
  useEffect(() => {
    // Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    // Axios
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
      setUsers(res.data),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <Card2
            key={item.id}
            name={item.name}
            userName={item.username}
            email={item.email}
            address={`${item.address.street}, ${item.address.suite} ,${item.address.city}, ${item.address.zipcode}`}
            phone={item.phone}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
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
