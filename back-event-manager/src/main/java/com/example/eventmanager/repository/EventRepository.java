package com.example.eventmanager.repository;

import com.example.eventmanager.model.Event;
import com.example.eventmanager.model.EventStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long>{

    /**
     * Find all events with status PUBLISHED and dateTime after current time
     * @param status
     * @param dateTime
     * @return
     */
    List<Event> findByStatusAndDateTimeAfter(EventStatus status, LocalDateTime dateTime);

    /**
     * Find all events with status PUBLISHED
     * @param status
     * @return
     */
    List<Event> findByStatus(EventStatus status);

    /**
     * Find all events with users enrolled
     * @param isEnrolled
     * @return
     */
    List<Event> findByIsEnrolled(boolean isEnrolled);

}
