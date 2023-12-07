package com.example.eventmanager.utils;
import com.example.eventmanager.DTO.EventDTO;
import com.example.eventmanager.mapper.EventMapper;
import com.example.eventmanager.model.Event;
import com.example.eventmanager.repository.EventRepository;
import com.example.eventmanager.service.EventService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

public class EventServiceTest{


    @Mock
    private EventRepository eventRepository;

    @Mock
    private EventMapper eventMapper;

    @InjectMocks
    private EventService eventService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    /**
     * Retrieves all events from the event repository.
     * @return a list of all events
     */
    @Test
    public void getAllEvents_ShouldReturnAllEvents() {
        // Preparar datos
        List<Event> mockEvents = Arrays.asList(new Event(), new Event());
        when(eventRepository.findAll()).thenReturn(mockEvents);

        // Ejecutar el método bajo prueba
        List<Event> result = eventService.getAllEvents();

        // Verificar el resultado
        assertNotNull(result);
        assertEquals(2, result.size());
        verify(eventRepository).findAll();
    }



    /**
     * Creates and returns an event based on the given EventDTO.
     * @return the created EventDTO with the generated ID
     * @throws RuntimeException if an error occurs during the creation process
     */
    @Test
    public void createEvent_ShouldCreateAndReturnEvent() {
        // Preparar datos
        EventDTO inputDto = new EventDTO();
        Event mockEvent = new Event();
        when(eventRepository.save(any(Event.class))).thenReturn(mockEvent);

        // Ejecutar el método bajo prueba
        EventDTO result = eventService.createEvent(inputDto);

        // Verificar el resultado
        assertNotNull(result);
        verify(eventRepository).save(any(Event.class));
    }



    /**
     * Updates an event with the given ID and returns the updated event.
     *
     * @return the updated EventDTO
     * @throws RuntimeException if the event with the given ID is not found
     */
    @Test
    public void updateEvent_ShouldUpdateAndReturnEvent() {
        // Preparar datos
        Long eventId = 1L;
        EventDTO inputDto = new EventDTO();
        inputDto.setId(eventId);
        Event existingEvent = new Event();
        EventDTO updatedEventDTO = new EventDTO();

        when(eventRepository.findById(eventId)).thenReturn(Optional.of(existingEvent));
        when(eventRepository.save(any(Event.class))).thenReturn(existingEvent);
        when(eventMapper.eventToEventDTO(any(Event.class))).thenReturn(updatedEventDTO);

        // Ejecutar el método bajo prueba
        EventDTO result = eventService.updateEvent(eventId, inputDto);

        // Verificar el resultado
        assertNotNull(result);
        verify(eventRepository).findById(eventId);
        verify(eventRepository).save(any(Event.class));
    }



    /**
     * Deletes an event with the given ID.
     *
     */
    @Test
    public void deleteEvent_ShouldDeleteEvent() {
        // Preparar datos
        Long eventId = 1L;
        when(eventRepository.existsById(eventId)).thenReturn(true);

        // Ejecutar el método bajo prueba
        eventService.deleteEvent(eventId);

        // Verificar la acción
        verify(eventRepository).deleteById(eventId);
    }

}
