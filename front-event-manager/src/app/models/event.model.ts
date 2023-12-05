// event.model.ts
export class Event {
    id?: number; // El '?' indica que es opcional, para eventos nuevos aún no asignados por el backend
    name: string = "";
    shortDescription: string = "";
    longDescription: string = "";
    dateTime: Date = new Date();
    organizer: string = "";
    location: string = "";
    status: EventStatus = EventStatus.current; // Por defecto, un evento nuevo es actual
  }
  
  // Si EventStatus es un enumerado, defínelo también
  export enum EventStatus {
    current,finished  }
