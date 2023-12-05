package com.example.eventmanager.DTO;

import com.example.eventmanager.model.EventStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EventDTO {

    public EventDTO(Long id, String title, String shortDescription, String longDescription, LocalDateTime dateTime, String organizer, String location, EventStatus status) {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.dateTime = dateTime;
        this.organizer = organizer;
        this.location = location;
        this.status = status;
    }
    public EventDTO() {
    }

    private Long id;
    private String title;
    private String shortDescription;
    private String longDescription;
    private LocalDateTime dateTime;
    private String organizer;
    private String location;
    private EventStatus status;
}
