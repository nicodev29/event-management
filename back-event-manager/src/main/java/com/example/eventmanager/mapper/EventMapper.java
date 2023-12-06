package com.example.eventmanager.mapper;

import com.example.eventmanager.DTO.EventDTO;
import com.example.eventmanager.model.Event;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EventMapper {

    EventDTO eventToEventDTO(Event event);
    Event eventDTOToEvent(EventDTO eventDTO);

}
