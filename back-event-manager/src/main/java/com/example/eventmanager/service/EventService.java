package com.example.eventmanager.service;


import com.example.eventmanager.DTO.EventDTO;
import com.example.eventmanager.mapper.EventMapper;
import com.example.eventmanager.model.Event;
import com.example.eventmanager.repository.EventRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final EventMapper eventMapper;

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

        try{
            event = eventRepository.save(event);
            return eventMapper.eventToEventDTO(event);

        }catch (Exception e){
            throw new RuntimeException("Event not found");
        }
    }

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

    public void deleteEvent(Long id) {
        if (!eventRepository.existsById(id)) {
            throw new EntityNotFoundException("Event not found with ID: " + id);
        }
        eventRepository.deleteById(id);
    }

}
