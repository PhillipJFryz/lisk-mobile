
import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS, Platform } from 'react-native';

export const initPushNotifications = () => {
  PushNotification.configure({
    onNotification: (notification) => {
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    popInitialNotification: true,
    requestPermissions: false,
  });
};

export const sendNotifications = (message, title) => {
  PushNotification.localNotificationSchedule({
    foreground: true,
    message,
    title,
    date: new Date(Date.now() + (2 * 1000)),
  });
};

export const requestNotificationPermissions = () => new Promise((resolve, reject) => {
  if (Platform.OS === 'ios') {
    PushNotification.checkPermissions(({ alert, badge, sound }) => {
      if (!alert || !badge || !sound) {
        PushNotification.requestPermissions()
          .then((target) => {
            if (target.alert || target.badge || target.sound) {
              resolve();
            } else {
              reject();
            }
          });
      } else {
        resolve();
      }
    });
  } else {
    resolve();
  }
});

