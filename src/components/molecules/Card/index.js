import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({fullName, email, imageUrl, firstName, lastName}) => {
  return (
    <View style={styles.card}>
      {/* <Text style={styles.name}>{fullName}</Text> */}
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.name}>{lastName}</Text>
      <Text style={styles.email}>{email}</Text>
      <Image style={styles.image} source={{uri: `${imageUrl}`}} />
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
