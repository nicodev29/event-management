package com.example.eventmanager.repository;

import com.example.eventmanager.model.Event;
import com.example.eventmanager.model.EventStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long>{

    List<Event> findByStatusAndDateTimeAfter(EventStatus status, LocalDateTime dateTime);

    List<Event> findByStatusAndDateTimeBefore(EventStatus status, LocalDateTime dateTime);

    @Query("SELECT e FROM Event e WHERE e.status = :status AND e.dateTime >= :dateTime AND e.name LIKE %:name%")
    List<Event> findEventsByStatusAndDateTimeAndTitle(EventStatus status, LocalDateTime dateTime, String name);
    List<Event> findByStatus(EventStatus status);

}
