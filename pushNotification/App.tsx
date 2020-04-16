import React from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  registerForPushNotificationsAsync = async () => {
    try {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        return;
      }

      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token)
    } catch (error) {
      console.log(error)
    }
  }

  state = {
    notification: {},
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    Notifications.addListener(notification => {
      this.setState({notification: notification});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
