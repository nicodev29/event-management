FROM openjdk:17-jdk-slim-buster
LABEL maintainer="nicogarcia1229@gmail.com"
VOLUME /tmp

ADD .target/event-manager-0.0.1-SNAPSHOT.jar event-manager.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/event-manager.jar"]
