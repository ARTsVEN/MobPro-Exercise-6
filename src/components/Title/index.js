// import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';

// class Title extends Component {
//   state = {
//     userName: 'John Doe',
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({userName: 'Arthur Efraim'});
//     }, 5000);
//   }
//   componentDidUpdate() {
//     console.log('Component Title did update');
//   }
//   componentWillUnmount() {
//     console.log('component will unmount');
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>{this.props.text}</Text>
//         <Text>Username : {this.state.userName}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'grey',
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
// });

// export default Title;
