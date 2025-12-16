# Timeout Airline Booking System - Frontend

A comprehensive React-based frontend for the Timeout Airline Booking System. This application provides a complete user interface for managing flights, bookings, users, planes, airports, clients, employees, and rewards.

## Features

### 1. **Home Page**
   - Flight search functionality
   - Filter by departure city, arrival city, and departure date
   - Display available flights with seat counts and pricing information
   - Easy booking navigation

### 2. **Users Management**
   - Create, read, update, and delete users
   - Manage user information (firstname, lastname, email, phone, address, birthdate)
   - Comprehensive user list with search and filter capabilities
   - Responsive data table

### 3. **Flights Management**
   - **Flights Tab**: Manage all flights with full details
     - Flight number, route, departure/arrival times
     - Seat availability and pricing for different classes
     - Edit and delete operations
   
   - **Planes Tab**: Manage aircraft
     - Brand, model, manufacturing year
     - CRUD operations
   
   - **Airports Tab**: Manage airports
     - Airport name, city, country
     - Full management capabilities

### 4. **Bookings & People Management**
   - **Bookings Tab**: Manage all flight reservations
     - Reservation ID, client info, flight, seat type
     - Create, update, delete bookings
   
   - **Clients Tab**: Manage airline clients
     - Passport number, personal details
     - Booking history tracking
   
   - **Employees Tab**: Manage airline staff
     - Employee details (profession, title)
     - Staff management

### 5. **Miles Rewards System**
   - Track miles and rewards for clients
   - Search rewards by client ID
   - View all rewards history
   - Automatic discount code generation when clients complete 3+ flights in a calendar year

## Technology Stack

- **React** 19.2.3 - Frontend framework
- **Material-UI (MUI)** 7.3.6 - Component library
- **Axios** 1.13.2 - HTTP client
- **React Router DOM** 7.10.1 - Routing
- **React Testing Library** - Testing utilities

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend API running on `http://localhost:8080`

### Steps

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint** (if needed)
   - Edit `src/api/apiClient.js`
   - Update `BASE_URL` if your backend is on a different URL

4. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── api/                      # API service layer
│   │   ├── apiClient.js         # Axios configuration
│   │   ├── userApi.js           # User endpoints
│   │   ├── flightApi.js         # Flight endpoints
│   │   ├── bookingApi.js        # Booking endpoints
   │   ├── planeApi.js           # Plane endpoints
   │   ├── airportApi.js         # Airport endpoints
   │   ├── clientApi.js          # Client endpoints
   │   ├── employeeApi.js        # Employee endpoints
   │   └── milesRewardApi.js     # Miles/Rewards endpoints
   │
   ├── components/               # Reusable components
   │   ├── UserFormDialog.js
   │   ├── PlaneFormDialog.js
   │   ├── AirportFormDialog.js
   │   ├── FlightFormDialog.js
   │   ├── BookingFormDialog.js
   │   ├── ClientFormDialog.js
   │   └── EmployeeFormDialog.js
   │
   ├── pages/                    # Page components
   │   ├── HomePage.js           # Home with flight search
   │   ├── UsersPage.js          # User management
   │   ├── FlightsPage.js        # Flights, planes, airports
   │   ├── BookingsPage.js       # Bookings, clients, employees
   │   └── RewardsPage.js        # Miles and rewards
   │
   ├── App.js                    # Main app component with routing
   ├── App.css                   # Global styles
   ├── index.js                  # Entry point
   └── package.json              # Dependencies
```

## API Endpoints

The frontend communicates with these backend endpoints:

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Flights
- `GET /api/flights` - Get all flights
- `GET /api/flights/search?departureCity=...&arrivalCity=...&departureDate=...` - Search flights
- `POST /api/flights` - Create flight
- `PUT /api/flights/{id}` - Update flight
- `DELETE /api/flights/{id}` - Delete flight

### Bookings
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/{id}` - Get booking by ID
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/{id}` - Update booking
- `DELETE /api/bookings/{id}` - Delete booking

### Planes
- `GET /api/planes` - Get all planes
- `POST /api/planes` - Create plane
- `PUT /api/planes/{id}` - Update plane
- `DELETE /api/planes/{id}` - Delete plane

### Airports
- `GET /api/airports` - Get all airports
- `POST /api/airports` - Create airport
- `PUT /api/airports/{id}` - Update airport
- `DELETE /api/airports/{id}` - Delete airport

### Clients
- `GET /api/clients` - Get all clients
- `POST /api/clients` - Create client
- `PUT /api/clients/{id}` - Update client
- `DELETE /api/clients/{id}` - Delete client

### Employees
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create employee
- `PUT /api/employees/{id}` - Update employee
- `DELETE /api/employees/{id}` - Delete employee

### Miles Rewards
- `GET /api/miles-rewards` - Get all rewards
- `GET /api/miles-rewards/client/{clientId}` - Get client rewards
- `POST /api/miles-rewards` - Create reward entry
- `PUT /api/miles-rewards/{id}` - Update reward
- `DELETE /api/miles-rewards/{id}` - Delete reward

## Usage Examples

### Search for Flights
1. Go to Home page
2. Enter departure city, arrival city, and date
3. Click "Search" button
4. View available flights with pricing

### Create a Booking
1. Go to Bookings page
2. Click "Add New Booking"
3. Fill in passenger details and flight information
4. Select seat type (Economy, Business, Premium, First Class)
5. Submit to create booking

### Manage Users
1. Go to Users page
2. View all users in table
3. Click "Edit" to modify user information
4. Click "Delete" to remove user
5. Click "Add New User" to create new user

### Track Rewards
1. Go to Rewards page
2. Enter client ID in search field
3. View all flights completed by that client
4. System automatically tracks when 3+ flights completed for discount code

## Building for Production

```bash
npm run build
```

This creates a production-ready build in the `build` directory.

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not reversible)

## Styling

The application uses Material-UI (MUI) for components and custom CSS for styling. Key styling features:

- Gradient background
- Responsive design
- Modern card-based layouts
- Smooth transitions and hover effects
- Professional color scheme

## Error Handling

All API calls include error handling with user-friendly error messages displayed via Material-UI Alert components.

## Future Enhancements

- User authentication and authorization
- Payment integration
- Email notifications
- Advanced search filters
- Export data to CSV/PDF
- Real-time flight updates
- Multi-language support
- Dark mode theme

## Troubleshooting

### Backend not connecting
- Ensure backend is running on `http://localhost:8080`
- Check API endpoint configuration in `src/api/apiClient.js`
- Check browser console for CORS errors

### Data not loading
- Verify database has data
- Check backend logs for errors
- Verify API responses in browser Network tab

### Form submission errors
- Check required fields are filled
- Verify data format matches backend expectations
- Check console for validation errors

## License

This project is part of the Timeout Airline Booking System for EPITA Bachelor's degree.

## Support

For issues or questions, please refer to the backend documentation or contact the development team.
