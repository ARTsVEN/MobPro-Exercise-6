import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card2 = ({name, userName, email, address, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={(styles.name, styles.ptop)}>Nama: {name}</Text>
      <Text style={styles.name}>Username: {userName}</Text>
      <Text style={styles.name}>Email: {email}</Text>
      <Text style={styles.name}>Address: {address}</Text>
      <Text style={(styles.name, styles.pbot)}>Phone Number: {phone}</Text>
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontWeight: '200',
    paddingLeft: 25,
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
    //alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
  ptop: {
    paddingTop: 15,
    paddingLeft: 25,
  },
  pbot: {
    paddingBottom: 15,
    paddingLeft: 25,
  },
});
