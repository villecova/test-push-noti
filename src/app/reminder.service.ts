import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, Timestamp } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';

@Injectable()
export class ReminderService {
  constructor(private firestore: Firestore) {}

  async createReminder(days: number) {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + days);
    await addDoc(collection(this.firestore, 'reminders'), {
      dueDate: Timestamp.fromDate(dueDate),
      created: Timestamp.now()
    });
  }

  getReminders() {
    return collectionData(collection(this.firestore, 'reminders'), { idField: 'id' });
  }
}
