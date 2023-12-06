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

    public List<EventDTO> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream()
                .map(eventMapper::eventToEventDTO)
                .collect(Collectors.toList());
    }


    public EventDTO getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return eventMapper.eventToEventDTO(event);
    }

    public EventDTO createEvent(EventDTO eventDTO) {
        Event event = eventMapper.eventDTOToEvent(eventDTO);
        try {
            event = eventRepository.save(event);
            return eventMapper.eventToEventDTO(event);
        } catch (Exception e) {
            log.error("Error al crear el evento: {}", e.getMessage(), e);
            throw new RuntimeException("Error al crear el evento: " + e.getMessage());
        }
    }

    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        try {
            event.setName(eventDTO.getName());
            event.setShortDescription(eventDTO.getShortDescription());
            event.setLongDescription(eventDTO.getLongDescription());
            event.setDateTime(LocalDateTime.now());
            event.setOrganizer(eventDTO.getOrganizer());
            event.setLocation(eventDTO.getLocation());
            event.setStatus(eventDTO.getStatus());
            event = eventRepository.save(event);

            return eventMapper.eventToEventDTO(event);

        } catch (Exception e) {

            throw new RuntimeException("Event not found");
        }
    }

    public void deleteEvent(Long id) {
        if (!eventRepository.existsById(id)) {
            throw new EntityNotFoundException("Event not found with ID: " + id);
        }
        eventRepository.deleteById(id);
    }

    public List<Event> getPublicEvents() {
        return eventRepository.findByStatus(EventStatus.PUBLISHED);
    }

    public List<EventDTO> getPublishedFutureEvents() {
        LocalDateTime now = LocalDateTime.now();
        List<Event> events = eventRepository.findByStatusAndDateTimeAfter(EventStatus.PUBLISHED, now);
        return events.stream()
                .map(eventMapper::eventToEventDTO)
                .collect(Collectors.toList());
    }


}
