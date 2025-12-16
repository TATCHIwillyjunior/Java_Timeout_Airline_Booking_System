# Frontend Testing Guide - Timeout Airline Booking System

This document provides comprehensive testing scenarios for the frontend application.

## Test Environment Setup

### Prerequisites
- Node.js installed
- Backend API running on `http://localhost:8080`
- All backend endpoints functioning correctly
- Test data populated in database

### Starting the Frontend
```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

---

## Testing Scenarios

### 1. Home Page - Flight Search

**Scenario 1.1: Basic Flight Search**
- **Steps:**
  1. Navigate to Home page
  2. Enter "Paris" in Departure City
  3. Enter "Tokyo" in Arrival City
  4. Select a future date for Departure Date
  5. Click "Search" button
- **Expected Result:** List of available flights displayed with flight numbers, routes, times, seat counts, and prices for different classes

**Scenario 1.2: Search with Invalid Inputs**
- **Steps:**
  1. Leave one or more fields empty
  2. Click "Search" button
- **Expected Result:** Error message "Please fill in all search fields"

**Scenario 1.3: Search with No Results**
- **Steps:**
  1. Enter non-existent city names
  2. Click "Search" button
- **Expected Result:** Message "No flights found. Try searching with different criteria."

---

### 2. Users Management Page

**Scenario 2.1: View All Users**
- **Steps:**
  1. Navigate to Users page
  2. Wait for data to load
- **Expected Result:** Table displays all users with their information

**Scenario 2.2: Add New User**
- **Steps:**
  1. Click "Add New User" button
  2. Fill in form fields:
     - First Name: "John"
     - Last Name: "Doe"
     - Email: "john@example.com"
     - Phone: "1234567890"
     - Address: "123 Main St"
     - Birthdate: "1990-01-15"
  3. Click "Add" button
- **Expected Result:** New user appears in table; form closes

**Scenario 2.3: Edit User**
- **Steps:**
  1. Click "Edit" button on any user row
  2. Modify a field (e.g., email)
  3. Click "Update" button
- **Expected Result:** User data updated in table

**Scenario 2.4: Delete User**
- **Steps:**
  1. Click "Delete" button on any user
  2. Confirm deletion in dialog
- **Expected Result:** User removed from table; confirmation message

---

### 3. Flights Management

#### 3.1 Flights Tab

**Scenario 3.1.1: Add New Flight**
- **Steps:**
  1. Go to Flights > Flights Tab
  2. Click "Add New Flight"
  3. Fill in form:
     - Flight Number: "TM001"
     - Departure City: "Paris"
     - Arrival City: "Tokyo"
     - Departure Hour: "10:00"
     - Arrival Hour: "08:00" (next day)
     - Number of Seats: "300"
     - Economy Price: "$500"
     - Business Price: "$1000"
     - Premium Price: "$1500"
     - First Class Price: "$2000"
  4. Click "Add" button
- **Expected Result:** New flight appears in table

**Scenario 3.1.2: Edit Flight**
- **Steps:**
  1. Click "Edit" on a flight
  2. Modify departure time
  3. Click "Update"
- **Expected Result:** Flight updated in table

**Scenario 3.1.3: Delete Flight**
- **Steps:**
  1. Click "Delete" on a flight
  2. Confirm in dialog
- **Expected Result:** Flight removed from system

#### 3.2 Planes Tab

**Scenario 3.2.1: Add New Plane**
- **Steps:**
  1. Go to Flights > Planes Tab
  2. Click "Add New Plane"
  3. Fill in:
     - Brand: "Boeing"
     - Model: "747-8"
     - Year: "2020"
  4. Click "Add"
- **Expected Result:** Plane added to table

**Scenario 3.2.2: Manage Planes (Edit/Delete)**
- **Steps:**
  1. Click Edit/Delete buttons on planes
  2. Modify or confirm deletion
- **Expected Result:** Changes reflected in table

#### 3.3 Airports Tab

**Scenario 3.3.1: Add New Airport**
- **Steps:**
  1. Go to Flights > Airports Tab
  2. Click "Add New Airport"
  3. Fill in:
     - Airport Name: "Paris Charles de Gaulle"
     - City: "Paris"
     - Country: "France"
  4. Click "Add"
- **Expected Result:** Airport added to list

**Scenario 3.3.2: View and Manage Airports**
- **Steps:**
  1. View all airports in table
  2. Edit or delete as needed
- **Expected Result:** Changes persist in database

---

### 4. Bookings & People Management

#### 4.1 Bookings Tab

**Scenario 4.1.1: Create New Booking**
- **Steps:**
  1. Go to Bookings > Bookings Tab
  2. Click "Add New Booking"
  3. Fill in form:
     - Last Name: "Smith"
     - First Name: "Jane"
     - Passport Number: "AB123456"
     - Birthdate: "1995-05-20"
     - Departure City: "Paris"
     - Arrival City: "Tokyo"
     - Departure Hour: "10:00"
     - Arrival Hour: "08:00"
     - Flight Number: "TM001"
     - Seat Type: "ECONOMY"
  4. Click "Book Flight"
- **Expected Result:** Booking created and appears in bookings table

**Scenario 4.1.2: Verify Seat Availability**
- **Steps:**
  1. Book a flight (note available seats)
  2. Create multiple bookings for same flight
  3. Verify seats decrease with each booking
- **Expected Result:** Seats are properly decremented; error if no seats available

#### 4.2 Clients Tab

**Scenario 4.2.1: Add New Client**
- **Steps:**
  1. Go to Bookings > Clients Tab
  2. Click "Add New Client"
  3. Fill in:
     - First Name: "John"
     - Last Name: "Traveler"
     - Email: "john@email.com"
     - Phone: "9876543210"
     - Passport Number: "CD789012"
     - Birthdate: "1988-03-10"
  4. Click "Add"
- **Expected Result:** Client added to system

**Scenario 4.2.2: Manage Clients**
- **Steps:**
  1. View all clients
  2. Edit client information
  3. Delete client if needed
- **Expected Result:** CRUD operations work correctly

#### 4.3 Employees Tab

**Scenario 4.3.1: Add New Employee**
- **Steps:**
  1. Go to Bookings > Employees Tab
  2. Click "Add New Employee"
  3. Fill in:
     - First Name: "Alice"
     - Last Name: "Captain"
     - Email: "alice@airline.com"
     - Profession: "Pilot"
     - Title: "Captain"
  4. Click "Add"
- **Expected Result:** Employee added to staff list

**Scenario 4.3.2: Manage Employees**
- **Steps:**
  1. View all employees
  2. Edit employee details
  3. Delete employee if needed
- **Expected Result:** Employee management works properly

---

### 5. Miles Rewards System

**Scenario 5.1: View Client Rewards**
- **Steps:**
  1. Go to Rewards page
  2. Enter a Client ID (from Clients tab)
  3. Click "Search"
- **Expected Result:** All flights booked by that client are displayed

**Scenario 5.2: Discount Code Generation (3+ Flights)**
- **Steps:**
  1. Create 3 bookings for the same client in same calendar year
  2. Go to Rewards page
  3. Search for that client
- **Expected Result:** Success message appears: "This client has completed 3 or more flights! A discount code has been generated."

**Scenario 5.3: View All Rewards**
- **Steps:**
  1. Go to Rewards page
  2. Scroll down to see "All Miles Rewards" table
- **Expected Result:** Complete history of all client flight records

---

## Data Validation Tests

### Test Validation Rules

**Scenario 6.1: Required Fields**
- Try submitting forms with empty required fields
- **Expected Result:** Error or form doesn't submit

**Scenario 6.2: Email Format**
- Enter invalid email format in user/client forms
- **Expected Result:** Validation error

**Scenario 6.3: Date Format**
- Select valid dates in birthdate and departure date fields
- **Expected Result:** Dates properly formatted and accepted

**Scenario 6.4: Numeric Fields**
- Enter letters in price/year/seat count fields
- **Expected Result:** Only numbers accepted

---

## Error Handling Tests

**Scenario 7.1: Server Connection Error**
- Stop the backend server
- Try to perform any action
- **Expected Result:** Error message displayed: "Error loading... Please try again."

**Scenario 7.2: Invalid Data**
- Try to create resource with invalid data
- **Expected Result:** Appropriate error message displayed

**Scenario 7.3: Duplicate Operations**
- Attempt to create duplicate entries if backend enforces uniqueness
- **Expected Result:** Proper error handling and messaging

---

## UI/UX Tests

**Scenario 8.1: Navigation**
- Click all navigation buttons in AppBar
- **Expected Result:** Proper routing to each page

**Scenario 8.2: Responsive Design**
- Test on different screen sizes
- **Expected Result:** Layout adapts appropriately

**Scenario 8.3: Form Usability**
- Tab through form fields
- **Expected Result:** Logical tab order and field focus

**Scenario 8.4: Loading States**
- Observe loading spinners when data is fetching
- **Expected Result:** Clear indication of loading status

---

## Test Data Checklist

Use this checklist to populate test data:

### Users
- [ ] At least 5 test users with complete information
- [ ] Users from different countries/cities

### Airports
- [ ] Paris CDG (Paris, France)
- [ ] Narita (Tokyo, Japan)
- [ ] LAX (Los Angeles, USA)
- [ ] Heathrow (London, UK)

### Planes
- [ ] Boeing 747-8
- [ ] Airbus A380
- [ ] Boeing 777
- [ ] Airbus A350

### Flights
- [ ] Paris to Tokyo
- [ ] New York to London
- [ ] Tokyo to Sydney
- [ ] London to Paris

### Clients
- [ ] At least 3 complete client profiles
- [ ] Include clients with 3+ bookings for reward testing

---

## Performance Testing

**Scenario 9.1: Large Dataset Loading**
- Create 50+ entries in any table
- **Expected Result:** Table loads and performs smoothly with pagination or virtual scrolling

**Scenario 9.2: Search Performance**
- Perform searches with various criteria
- **Expected Result:** Results return promptly (< 2 seconds)

---

## Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## Sign-off Checklist

- [ ] All scenarios tested successfully
- [ ] No critical bugs found
- [ ] UI is responsive and user-friendly
- [ ] All CRUD operations working
- [ ] Error handling appropriate
- [ ] Navigation functional
- [ ] Data validation working
- [ ] Performance acceptable

---

## Known Issues

(Document any issues found during testing)

---

## Notes

- Ensure backend API is always running during frontend tests
- Clear browser cache if experiencing stale data issues
- Check browser console for JavaScript errors
- Review network tab for API response times

