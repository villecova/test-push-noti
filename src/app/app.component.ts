import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReminderService } from './reminder.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [ReminderService],
  template: `
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Watering Reminder</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <form (ngSubmit)="setReminder()">
          <ion-item>
            <ion-label position="floating">Days until next watering</ion-label>
            <ion-input type="number" [(ngModel)]="days" name="days" required></ion-input>
          </ion-item>
          <ion-button expand="block" type="submit" [disabled]="!days">Set Reminder</ion-button>
        </form>
      </ion-content>
    </ion-app>
  `
})
export class AppComponent {
  days: number | undefined;

  constructor(private reminderSvc: ReminderService) {}

  setReminder() {
    if (!this.days) return;
    this.reminderSvc.createReminder(this.days);
    this.days = undefined;
  }
}
