import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PushNotification from 'react-native-push-notification'

export default class App extends Component<{}> {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      }
    })      
  }

  createPushNotification = () => {
    console.log('createPushNotification called')

    PushNotification.localNotification({
      message: "My Notification Message"
    });
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (5 * 1000))
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text
          onPress={this.createPushNotification}
        >
          New Push Notification
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
