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