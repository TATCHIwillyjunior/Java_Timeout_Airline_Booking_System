# Quick Start Guide - Frontend

## Prerequisites

- Node.js (v14+) installed
- Backend API running on `http://localhost:8080`
- npm or yarn package manager

## Installation (5 minutes)

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

---

## First-Time Usage

### Home Page - Flight Search
1. Click "Home" in the navigation bar
2. Enter:
   - Departure City: e.g., "Paris"
   - Arrival City: e.g., "Tokyo"
   - Departure Date: select any future date
3. Click "Search" button
4. View available flights with pricing

### Create a User
1. Click "Users" in navigation
2. Click "Add New User" button
3. Fill in the form:
   - First Name: "John"
   - Last Name: "Doe"
   - Email: "john@email.com"
   - Phone: "1234567890"
   - Address: "123 Main St"
   - Birthdate: "1990-01-15"
4. Click "Add" button

### Create a Flight
1. Click "Flights" in navigation
2. Keep "Flights" tab selected
3. Click "Add New Flight"
4. Fill in required fields:
   - Flight Number: "TM001"
   - Departure/Arrival Cities
   - Times
   - Number of Seats
   - Pricing for each class
5. Click "Add"

### Make a Booking
1. Click "Bookings" in navigation
2. Keep "Bookings" tab selected
3. Click "Add New Booking"
4. Enter passenger information:
   - Name and passport details
   - Flight information
   - Seat type preference
5. Click "Book Flight"

### Add a Client
1. Click "Bookings" in navigation
2. Go to "Clients" tab
3. Click "Add New Client"
4. Fill in personal information
5. Click "Add"

### Track Rewards
1. Click "Rewards" in navigation
2. Enter a Client ID
3. Click "Search"
4. View all flights for that client
5. System shows message if 3+ flights completed

---

## Common Tasks

### Edit Information
1. Find the item in any table
2. Click "Edit" button
3. Modify fields
4. Click "Update"

### Delete Information
1. Click "Delete" button
2. Confirm in the dialog
3. Item is removed

### Switch Tabs
In Flights page or Bookings page:
- Click tab name at the top
- Content switches to that tab

### Manage Different Entities

**Flights, Planes, Airports** → Click "Flights"
**Bookings, Clients, Employees** → Click "Bookings"
**User List** → Click "Users"
**Search & Rewards** → Click "Rewards"

---

## Tips & Tricks

### Forms
- All red asterisks (*) indicate required fields
- Click away from a field to trigger validation
- Date fields open a calendar picker

### Tables
- Scroll right on mobile to see all columns
- Edit button modifies existing data
- Delete button removes data (with confirmation)

### Search
- Home page flight search accepts partial matches
- Rewards search shows all flights by client
- Tables auto-refresh after changes

### Error Messages
- Red alert box = error
- Blue alert box = information
- Green alert box = success
- Click "Bookings" tab to see discount code notification

---

## Troubleshooting

### Page Shows "Loading..." But Nothing Appears
**Solution:** Check if backend API is running on http://localhost:8080

### Forms Won't Submit
**Solution:** Ensure all required fields (marked with *) are filled

### Data Doesn't Update After Changes
**Solution:** 
1. Refresh the page (Ctrl+R or Cmd+R)
2. Check browser console for errors (F12)
3. Verify backend is running

### API Connection Error
**Solution:**
1. Open .env file in frontend folder
2. Verify: `REACT_APP_API_URL=http://localhost:8080/api`
3. Restart the development server

### Form Shows Old Data After Edit
**Solution:** Click the Edit button again or refresh the page

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Refresh Page | Ctrl+R (Cmd+R Mac) |
| Developer Tools | F12 |
| Search | Ctrl+F (Cmd+F Mac) |
| Navigate Home | Home key |
| Open Link | Ctrl+Click |

---

## Page Navigation Map

```
Home (Flight Search)
├── Search available flights
└── View pricing by class

Users (Manage Users)
├── Add new user
├── Edit user info
└── Delete user

Flights (Complex management)
├── Flights Tab (Add/Edit/Delete flights)
├── Planes Tab (Manage aircraft)
└── Airports Tab (Manage airports)

Bookings (People & Reservations)
├── Bookings Tab (Create/manage reservations)
├── Clients Tab (Manage customer profiles)
└── Employees Tab (Manage staff)

Rewards (Miles & Discounts)
├── Search client rewards
├── View all rewards history
└── Check discount code eligibility
```

---

## Data Entry Examples

### Flight Example
- Flight Number: **TM101**
- Route: **Paris** → **Tokyo**
- Times: **10:00** departure, **08:00** arrival
- Seats: **300**
- Economy: **$500** | Business: **$1000** | Premium: **$1500** | First: **$2000**

### User Example
- Name: **Jane Smith**
- Email: **jane.smith@email.com**
- Phone: **+33612345678**
- Address: **456 Rue de Paris, Paris, France**
- Birth: **1992-07-15**

### Client Example (for booking)
- Name: **John Traveler**
- Passport: **AB123456CD**
- Email: **john@travel.com**
- Birth: **1985-03-20**

### Booking Example
- Passenger: **Smith, John**
- Passport: **CD789012AB**
- Flight: **TM101**
- Route: **Paris → Tokyo**
- Seat: **BUSINESS**

---

## FAQ

**Q: Where is my data stored?**
A: In the backend database. Ensure backend is running and configured.

**Q: Can I use multiple browsers?**
A: Yes, but data is shared - all changes appear across all browsers.

**Q: How do I create test data quickly?**
A: Use the "Add" buttons on each page to create sample data.

**Q: Can I undo deletions?**
A: No. Always confirm deletions carefully.

**Q: How many records can I have?**
A: Limited by your database, typically thousands.

**Q: Is there a mobile app?**
A: This web app is responsive and works on mobile browsers.

**Q: How do I change the backend URL?**
A: Edit the `.env` file in the frontend folder.

**Q: Can I export data?**
A: Currently not supported. Check the backend API documentation.

---

## Support Resources

1. **Full Documentation**: See `FRONTEND_README.md`
2. **Testing Guide**: See `FRONTEND_TESTING.md`
3. **Implementation Details**: See `FRONTEND_SUMMARY.md`
4. **Backend Issues**: Check backend documentation
5. **Browser Console**: Press F12 for JavaScript errors

---

## Getting Help

If something doesn't work:

1. **Check browser console** (F12) for errors
2. **Verify backend is running** (`http://localhost:8080`)
3. **Refresh the page** (Ctrl+R)
4. **Clear cache** (Ctrl+Shift+Del)
5. **Restart the frontend** (Stop and `npm start`)
6. **Check API endpoint** in `.env` file

---

## Next Steps

- [ ] Complete all CRUD operations for each entity
- [ ] Make test bookings and verify seat counts
- [ ] Create clients and test reward system
- [ ] Run through testing scenarios in `FRONTEND_TESTING.md`
- [ ] Test on different devices/browsers
- [ ] Prepare demo for presentation

---

**Happy flying!** ✈️

For detailed information, refer to the full documentation files in the project root.

