const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Listens for new reminders and schedules a notification
exports.scheduleReminder = functions.firestore
  .document('reminders/{id}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const dueDate = data.dueDate.toDate();
    const payload = {
      notification: {
        title: 'Water your plant',
        body: `Reminder set for ${dueDate.toDateString()}`
      }
    };
    // Here you could integrate with FCM or a third-party scheduler
    // For prototype, send immediately if dueDate is in the past
    if (dueDate <= new Date()) {
      await admin.messaging().sendToTopic('reminders', payload);
    } else {
      // TODO: schedule message for future execution
    }
  });
