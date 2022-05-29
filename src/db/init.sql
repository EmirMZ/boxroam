CREATE USER "app_admin" WITH PASSWORD 'password';

CREATE USER "app_user" WITH PASSWORD 'password';

CREATE DATABASE boxroam_database WITH OWNER app_admin;

\c boxroam_database postgres

DROP SCHEMA public;

CREATE SCHEMA app AUTHORIZATION app_admin;

\c boxroam_database app_admin

GRANT USAGE ON SCHEMA app TO app_user;

set search_path to app;



ALTER DEFAULT PRIVILEGES FOR ROLE app_admin
   REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;


ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app
   GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_user;
ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app
   GRANT SELECT, USAGE ON SEQUENCES TO app_user;
ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app
   GRANT EXECUTE ON FUNCTIONS TO app_user;

CREATE TABLE Passenger
(
  Name VARCHAR(50) NOT NULL,
  Email varchar(255) UNIQUE NOT NULL,
  Password varchar(255) NOT NULL,
  Gender INT NOT NULL,
  Phone VARCHAR(20) NOT NULL,
  Address VARCHAR(120) NOT NULL,
  ID SERIAL PRIMARY KEY
);




CREATE TABLE Bus
(
  ID SERIAL PRIMARY KEY,
  Seats INT NOT NULL,
  Depart_Time TIME NOT NULL,
  Station_Arr_ID INT[] NOT NULL,
  Time_Table INT[] NOT NULL,
  Position INT NOT NULL
);

INSERT INTO app.Bus (seats, depart_time, station_arr_id, time_table, position) VALUES 
(28,'07:00','{12,9,11}','{1,3}',1),
(28,'08:00','{6,11,9}','{2,3}',1),
(17,'09:00','{12,6,8}','{3,2}',1),
(17,'10:00','{6,11,7}','{2,3}',1),
(23,'11:00','{11,10}','{3}',1),
(23,'12:00','{9,5}','{4}',1),
(23,'13:00','{10,5}','{4}',1);


CREATE TABLE Station
(
  ID SERIAL PRIMARY KEY,
  Name VARCHAR(20) NOT NULL UNIQUE
);



CREATE TABLE Driver
(
  Shift INT,
  Name VARCHAR(50) NOT NULL,
  Email varchar(255) UNIQUE NOT NULL,
  Password varchar(255) NOT NULL,
  ID SERIAL PRIMARY KEY,
  Bus_ID INT 
);

CREATE TABLE Operator
(
  Shift INT,
  Email varchar(255) UNIQUE NOT NULL,
  Password varchar(255) NOT NULL,
  Name VARCHAR NOT NULL,
  ID SERIAL PRIMARY KEY
);

CREATE TABLE Booking
(
  Destination INT NOT NULL,
  Boarding_Position INT NOT NULL,
  Date DATE NOT NULL,
  ID SERIAL PRIMARY KEY,
  Passenger_ID INT NOT NULL,
  Transaction_ID INT,
  Bus_ID INT NOT NULL
);
CREATE TABLE Transaction
(
  Bank_Transaction_Number INT NOT NULL,
  Price INT NOT NULL,
  Date DATE NOT NULL,
  ID SERIAL PRIMARY KEY
);