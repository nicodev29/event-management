package com.example.eventmanager.service;


import com.example.eventmanager.DTO.EventDTO;
import com.example.eventmanager.mapper.EventMapper;
import com.example.eventmanager.model.Event;
import com.example.eventmanager.model.EventStatus;
import com.example.eventmanager.repository.EventRepository;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class EventService {

    private final EventRepository eventRepository;
    private final EventMapper eventMapper;
    private static final Logger log = LoggerFactory.getLogger(EventService.class);

    @Autowired
    public EventService(EventRepository eventRepository, EventMapper eventMapper) {
        this.eventRepository = eventRepository;
        this.eventMapper = eventMapper;
    }

    /**
     * Retrieves all events from the event repository.
     * @return
     */
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    /**
     * Retrieves all events by Id from the event repository.
     * @param id
     * @return
     */
    public EventDTO getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return eventMapper.eventToEventDTO(event);
    }

    /**
     * Creates a new event in the event repository.
     * @param eventDTO
     * @return
     */
    public EventDTO createEvent(EventDTO eventDTO) {

        Event event = new Event();
        event.setName(eventDTO.getName());
        event.setShortDescription(eventDTO.getShortDescription());
        event.setLongDescription(eventDTO.getLongDescription());
        event.setDateTime(eventDTO.getDateTime());
        event.setOrganizer(eventDTO.getOrganizer());
        event.setLocation(eventDTO.getLocation());
        event.setStatus(eventDTO.getStatus());
        event.setIsEnrolled(eventDTO.isEnrolled());

        try {

            event = eventRepository.save(event);
            eventDTO.setId(event.getId());
            return eventDTO;

        } catch (Exception e) {
            log.error("Error al crear el evento: {}", e.getMessage(), e);
            throw new RuntimeException("Error al crear el evento: " + e.getMessage());
        }
    }

    /**
     * Updates an event with the given ID and returns the updated event.
     * @param id
     * @param eventDTO
     * @return
     */
    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        try {
            event.setName(eventDTO.getName());
            event.setShortDescription(eventDTO.getShortDescription());
            event.setLongDescription(eventDTO.getLongDescription());
            event.setDateTime(eventDTO.getDateTime());
            event.setOrganizer(eventDTO.getOrganizer());
            event.setLocation(eventDTO.getLocation());
            event.setStatus(eventDTO.getStatus());
            event = eventRepository.save(event);

            return eventMapper.eventToEventDTO(event);

        } catch (Exception e) {

            throw new RuntimeException("Event not found");
        }
    }

    /**
     * Deletes an event with the given ID.
     * @param id
     */
    public void deleteEvent(Long id) {
        if (!eventRepository.existsById(id)) {
            throw new EntityNotFoundException("Event not found with ID: " + id);
        }
        eventRepository.deleteById(id);
    }

    /**
     * Retrieves all events from the event repository with the given status.
     * @return
     */
    public List<Event> getPublicEvents() {
        return eventRepository.findByStatus(EventStatus.PUBLISHED);
    }

    /**
     * Retrieves all events from the event repository with the given status and date time after now.
     * @return
     */
    public List<Event> getPublishedFutureEvents() {
        LocalDateTime now = LocalDateTime.now();
        return eventRepository.findByStatusAndDateTimeAfter(EventStatus.PUBLISHED, now);
    }

    /**
     * Retrieves all events who users can enroll from the event repository.
     * @param eventId
     */
    public void enrollEvent(Long eventId) {
        System.out.println("Inscribiendo al evento con ID: " + eventId);
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Evento no encontrado"));
        event.setIsEnrolled(true);
        eventRepository.save(event);
    }

    /**
     * Retrieves all events whit user enrolled from the event repository.
     * @return
     */
    public List<Event> getEnrolledEvents() {
        return eventRepository.findByIsEnrolled(true);
    }

}
