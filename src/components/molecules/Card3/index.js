import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({fullName, email, firstName, lastName}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.name}>{lastName}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
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
