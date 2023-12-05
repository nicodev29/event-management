import { Data } from "@angular/router";

// event.model.ts
export class Event {
    id?: number; 
    name: string = '';
    shortDescription: string = '';
    longDescription: string = '';
    dateTime: Date = new Date();
    organizer: string = '';
    location: string = '';
    status: string = '';
  }
  