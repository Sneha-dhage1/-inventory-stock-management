FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY mvnw mvnw
COPY .mvn .mvn
COPY pom.xml pom.xml
# download dependencies
RUN ./mvnw dependency:go-offline -B

COPY src src
RUN ./mvnw -DskipTests package -B

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
ARG JAR_FILE=target/todo-backend-0.0.1-SNAPSHOT.jar
COPY --from=build /app/${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]

