import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  someFunction = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.SEND_SMS);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        var phoneNumber = {
          "addressList": ["123", "456", "789"]
        };

        SmsAndroid.send(
          JSON.stringify(phoneNumber),
          'hello world',
          (fail) => alert(fail),
          (success) => alert(success),
        );

      } else {
        alert('SMS permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={this.someFunction}>
          <View>
            <Image
              source={require('./src/assets/sms.png')}
              style={styles.ImageStyle}
            />
            <Text style={styles.text}>Send SMS</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 16,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  }
});