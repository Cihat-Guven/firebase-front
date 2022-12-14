// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBiLHRh2pE_vrRoHu3ibwqCFuWjVpGLIXI",
    authDomain: "test-notification-53562.firebaseapp.com",
    projectId: "test-notification-53562",
    storageBucket: "test-notification-53562.appspot.com",
    messagingSenderId: "430185113883",
    appId: "1:430185113883:web:b59cedbeb065fd8c3d8bbe",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
