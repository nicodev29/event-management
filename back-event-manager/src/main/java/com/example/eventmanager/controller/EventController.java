package com.example.eventmanager.controller;

import com.example.eventmanager.DTO.EventDTO;
import com.example.eventmanager.model.Event;
import com.example.eventmanager.service.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/public")
    public List<Event> getPublicEvents() {
        return eventService.getPublicEvents();
    }

    @GetMapping("/all")
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        List<EventDTO> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventDTO> getEventById(@PathVariable Long id) {
        EventDTO event = eventService.getEventById(id);
        return ResponseEntity.ok(event);
    }

    @PostMapping("/create")
    public ResponseEntity<EventDTO> createEvent(@RequestBody EventDTO eventDTO) {
        EventDTO newEvent = eventService.createEvent(eventDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newEvent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EventDTO> updateEvent(@PathVariable Long id, @RequestBody EventDTO eventDTO) {
        EventDTO updatedEvent = eventService.updateEvent(id, eventDTO);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/enroll")
    public ResponseEntity<List<EventDTO>> getPublishedFutureEvents() {
        List<EventDTO> events = eventService.getPublishedFutureEvents();
        return ResponseEntity.ok(events);
    }

    @PostMapping("/enroll/{eventId}")
    public ResponseEntity<?> enrollEvent(@PathVariable Long eventId) {
        System.out.println("Recibida solicitud de inscripción para el evento con ID: " + eventId);
        eventService.enrollEvent(eventId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/events/enrolled")
    public ResponseEntity<List<Event>> getEnrolledEvents() {
        List<Event> enrolledEvents = eventService.getEnrolledEvents();
        return ResponseEntity.ok(enrolledEvents);
    }

}
