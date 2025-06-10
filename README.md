# Watering Reminder Prototype

This repository contains a minimal prototype for a watering reminder app built with Ionic and Angular using standalone components.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Build the project (compiles TypeScript):

```bash
npm run build
```

3. Deploy `functions/` to Firebase if you want to use the Cloud Function skeleton.

## Structure

- `src/` contains the Ionic + Angular application.
- `functions/` contains a Firebase Cloud Function that listens for new reminders and demonstrates how to send a notification via FCM.

This prototype accepts a number of days, calculates the due date, stores a reminder in Firestore, and provides a placeholder Cloud Function for notifications.
