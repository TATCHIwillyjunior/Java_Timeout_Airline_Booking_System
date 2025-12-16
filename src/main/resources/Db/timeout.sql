-- Create DATABASE
CREATE DATABASE timeout_airline_booking NOT EXISTS;


CREATE TABLE users (
    User_Id BIGSERIAL PRIMARY KEY,
    Firstname VARCHAR(100) NOT NULL,
    Lastname VARCHAR(100) NOT NULL,
    Address VARCHAR(255),
    Email VARCHAR(150) UNIQUE NOT NULL,
    PhoneNo VARCHAR(50),
    BirthDate DATE NOT NULL

);

-- Clients (1:1 with users)
CREATE TABLE clients (
    Client_Id BIGSERIAL PRIMARY KEY,
    User_Id BIGINT NOT NULL UNIQUE REFERENCES users(User_Id) ON DELETE CASCADE, -- if a user is deleted, the linked client record is automatically deleted
    PassportNo VARCHAR(100) UNIQUE NOT NULL
);

-- Employees (1:1 with users)
CREATE TABLE employees (
    Employee_Id BIGSERIAL PRIMARY KEY,
    User_Id BIGINT NOT NULL UNIQUE REFERENCES users(User_Id) ON DELETE CASCADE, -- if a user is deleted, the linked client record is automatically deleted
    EmployeeNo VARCHAR(50) UNIQUE NOT NULL, -- business identifier
    Profession VARCHAR(100) NOT NULL,
    Title VARCHAR(100)

);

-- Planes
CREATE TABLE planes (
    Plane_Id BIGSERIAL PRIMARY KEY,
    Brand VARCHAR(100) NOT NULL,
    Model VARCHAR(100) NOT NULL,
    ManufacturingYear YEAR NOT NULL

);

-- Airport
CREATE TABLE airports (
    Airport_Id BIGSERIAL PRIMARY KEY,
    Name VARCHAR(150) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Code VARCHAR(10) UNIQUE NOT NULL
);

-- Flights
CREATE TABLE flights (
    Flights_Id BIGSERIAL PRIMARY KEY,
    Flight_No VARCHAR(20) UNIQUE NOT NULL,
    Departure_City VARCHAR(100) NOT NULL,
    Arrival_City VARCHAR(100) NOT NULL,
    Departure_Hour TIMESTAMP NOT NULL,
    Arrival_Hour TIMESTAMP NOT NULL,
    Departure_Airport_Id BIGINT REFERENCES airports(Airport_Id),
    Arrival_Airport_Id BIGINT REFERENCES airports(Airport_Id),
    Plane_Id BIGINT REFERENCES planes(Plane_Id),
    No_Of_Seat INT NOT NULL,
    First_Class_Seat_Price NUMERIC(10,2) NOT NULL,
    Premium_Seat_Price NUMERIC(10,2) NOT NULL,
    Business_Class_Price NUMERIC(10,2) NOT NULL,
    Economics_Class_Price NUMERIC(10,2) NOT NULL
);

-- Bookings
CREATE TABLE bookings (
    Booking_Id BIGSERIAL PRIMARY KEY,
    Flight_Id BIGINT NOT NULL REFERENCES flights(Flights_Id) ON DELETE CASCADE,
    Client_Id BIGINT NOT NULL REFERENCES clients(Client_Id) ON DELETE CASCADE,
    Type_Of_Seat VARCHAR(20) NOT NULL,
    Booked_At TIMESTAMP DEFAULT now(),
    UNIQUE (Flight_Id, Client_Id, Type_Of_Seat)
);

-- Miles rewards
CREATE TABLE miles_rewards (
    Miles_Rewards_Id BIGSERIAL PRIMARY KEY,
    Client_Id BIGINT NOT NULL REFERENCES clients(Client_Id) ON DELETE CASCADE,
    Flight_Id BIGINT NOT NULL REFERENCES flights(Flight_Id) ON DELETE CASCADE,
    Date_Offer DATE NOT NULL,
    Discount_Code VARCHAR(50)
);

-- Usefull during Filtering
CREATE INDEX idx_flights_dep_city_hour ON flights (Departure_City, Departure_Hour);
CREATE INDEX idx_flights_arr_city ON flights (Arrival_City);