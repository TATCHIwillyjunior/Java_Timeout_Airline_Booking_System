# Frontend Developer Guide

## For Developers Who Want to Customize or Extend

This guide helps developers understand the frontend codebase and how to make modifications.

---

## 📁 Project Structure Deep Dive

### API Layer (`src/api/`)

Each file follows the same pattern:

```javascript
import apiClient from "./apiClient";

const ENDPOINT = "/resource-name";

export const getResource = () => apiClient.get(ENDPOINT);
export const getResourceById = (id) => apiClient.get(`${ENDPOINT}/${id}`);
export const createResource = (data) => apiClient.post(ENDPOINT, data);
export const updateResource = (id, data) => apiClient.put(`${ENDPOINT}/${id}`, data);
export const deleteResource = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
```

**To add a new API module:**
1. Create `src/api/newResourceApi.js`
2. Define ENDPOINT
3. Export CRUD functions
4. Use in components

### Components (`src/components/`)

All form components are dialog-based:

```javascript
const FormDialog = ({ open, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(initialData || {});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({}); // Reset
  };
  
  return (
    <Dialog open={open} onClose={onClose}>
      {/* Form fields */}
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
```

**To create a new form component:**
1. Create component in `src/components/`
2. Use useState for form data
3. Include TextField components for each field
4. Implement handleChange and handleSubmit
5. Wrap in Dialog

### Pages (`src/pages/`)

Each page follows this pattern:

```javascript
const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await apiFunction();
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <Box>
      <Button onClick={() => setOpenForm(true)}>Add</Button>
      <Table>
        {/* Display data */}
        <Button onClick={() => edit(item)}>Edit</Button>
        <Button onClick={() => delete(item)}>Delete</Button>
      </Table>
      <FormDialog onSubmit={save} />
    </Box>
  );
};
```

---

## 🎨 Styling Guide

### Global Styles (`App.css`)

Main style categories:

```css
/* Global and layout */
body, html { }
.container { }

/* Components */
.MuiButton-root { }
.MuiTextField-root { }
.MuiTable-root { }
.MuiCard-root { }

/* States */
:hover { }
.Mui-selected { }
.Mui-error { }
```

### Modifying Styles

**Change primary color:**
```css
/* In App.css */
.MuiAppBar-root {
  background: linear-gradient(90deg, #YOUR_COLOR, #YOUR_COLOR2);
}
```

**Change background:**
```css
body {
  background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
}
```

**Add custom component style:**
```css
.my-custom-class {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

### Using Material-UI Theme

```javascript
const sx = {
  container: {
    padding: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  button: {
    marginRight: 1,
    backgroundColor: '#1976d2',
  }
};

// In JSX
<Box sx={sx.container}>
  <Button sx={sx.button}>Click Me</Button>
</Box>
```

---

## 🔄 Common Modifications

### Change API Endpoint

**File:** `src/api/apiClient.js`
```javascript
const BASE_URL = "http://your-domain.com/api"; // Change here
```

Or use environment variable:
```javascript
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";
```

### Add New Page

1. Create `src/pages/NewPage.js`:
```javascript
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export default function NewPage() {
  return (
    <Box>
      <Typography variant="h4">New Page</Typography>
      {/* Page content */}
    </Box>
  );
}
```

2. Import in `App.js`:
```javascript
import NewPage from "./pages/NewPage";
```

3. Add route:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

4. Add navigation button in AppBar:
```javascript
<Button component={Link} to="/new-page">New</Button>
```

### Add New Form Field

1. In component state:
```javascript
const [formData, setFormData] = useState({
  // ... existing fields
  newField: "", // Add here
});
```

2. Add TextField:
```javascript
<TextField
  label="New Field"
  name="newField"
  value={formData.newField}
  onChange={handleChange}
  fullWidth
/>
```

### Add Form Validation

```javascript
const validateForm = () => {
  if (!formData.email.includes('@')) {
    setError('Invalid email');
    return false;
  }
  if (formData.phone.length < 10) {
    setError('Phone must be at least 10 digits');
    return false;
  }
  return true;
};

const handleSubmit = () => {
  if (!validateForm()) return;
  onSubmit(formData);
};
```

### Add Search Functionality

```javascript
const [searchTerm, setSearchTerm] = useState('');
const [filteredData, setFilteredData] = useState(data);

const handleSearch = (e) => {
  const term = e.target.value;
  setSearchTerm(term);
  
  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(term.toLowerCase())
  );
  setFilteredData(filtered);
};

// In JSX
<TextField
  label="Search"
  value={searchTerm}
  onChange={handleSearch}
  placeholder="Enter search term"
/>

<Table>
  {filteredData.map(item => (
    // Display item
  ))}
</Table>
```

### Add Sorting to Table

```javascript
const [sortBy, setSortBy] = useState('name');
const [sortOrder, setSortOrder] = useState('asc');

const handleSort = (column) => {
  const newOrder = sortBy === column && sortOrder === 'asc' ? 'desc' : 'asc';
  setSortBy(column);
  setSortOrder(newOrder);
  
  const sorted = [...data].sort((a, b) => {
    if (newOrder === 'asc') {
      return a[column] > b[column] ? 1 : -1;
    } else {
      return a[column] < b[column] ? 1 : -1;
    }
  });
  setData(sorted);
};

// In table header
<TableCell onClick={() => handleSort('name')}>
  Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
</TableCell>
```

### Add Pagination

```javascript
const [page, setPage] = useState(0);
const itemsPerPage = 10;

const paginatedData = data.slice(
  page * itemsPerPage,
  (page + 1) * itemsPerPage
);

// In JSX
<Table>
  {paginatedData.map(item => (/* ... */))}
</Table>

<TablePagination
  rowsPerPageOptions={[5, 10, 25]}
  component="div"
  count={data.length}
  rowsPerPage={itemsPerPage}
  page={page}
  onPageChange={(event, newPage) => setPage(newPage)}
/>
```

---

## 🐛 Debugging Tips

### Check API Calls
1. Open Developer Tools (F12)
2. Go to Network tab
3. Look for API requests
4. Check request/response payloads

### Console Errors
```javascript
// Add console logs
console.log('Data:', data);
console.error('Error:', error);
```

### React DevTools
1. Install React DevTools browser extension
2. Inspect component state
3. Check props
4. Monitor re-renders

### Check Network Requests
```javascript
// Add in apiClient
apiClient.interceptors.request.use(request => {
  console.log('Request:', request);
  return request;
});

apiClient.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Error:', error);
    return Promise.reject(error);
  }
);
```

---

## 📦 Adding Dependencies

### Install Package
```bash
npm install package-name
```

### Use in Component
```javascript
import { ComponentName } from 'package-name';

// Use in JSX
<ComponentName prop="value" />
```

### Useful Packages to Consider
- `react-data-table-component` - Advanced tables
- `react-hook-form` - Advanced form handling
- `date-fns` - Date manipulation
- `lodash` - Utility functions
- `react-query` - Data fetching
- `zustand` - State management

---

## 🚀 Performance Optimization

### Lazy Load Pages
```javascript
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));

// In routes
<Suspense fallback={<CircularProgress />}>
  <Route path="/" element={<HomePage />} />
</Suspense>
```

### Memoize Components
```javascript
import { memo } from 'react';

const UserRow = memo(({ user, onEdit, onDelete }) => {
  return (
    <TableRow>
      {/* Row content */}
    </TableRow>
  );
});
```

### Cache API Responses
```javascript
const cache = new Map();

const fetchDataCached = async (url) => {
  if (cache.has(url)) return cache.get(url);
  
  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  return data;
};
```

---

## 🔐 Security Best Practices

### Sanitize Input
```javascript
// Don't directly inject user input
const safe = userInput.replace(/[<>]/g, ''); // Remove HTML chars

// Use proper escaping
const encoded = document.createElement('div');
encoded.textContent = userInput;
const safe = encoded.innerHTML;
```

### Secure API Calls
```javascript
// Add headers
apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// Use HTTPS in production
const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.example.com'
  : 'http://localhost:8080';
```

### Environment Variables
```javascript
// Never commit API keys
const API_KEY = process.env.REACT_APP_API_KEY;
```

---

## 📋 Testing Your Changes

### Manual Testing Checklist
- [ ] Feature works in isolation
- [ ] Doesn't break existing features
- [ ] Error handling works
- [ ] Loading states display
- [ ] Works on mobile
- [ ] Works in different browsers

### Automated Testing Example
```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from './pages/HomePage';

test('search button works', async () => {
  render(<HomePage />);
  
  const button = screen.getByRole('button', { name: /search/i });
  await userEvent.click(button);
  
  // Assert something happened
});
```

---

## 🎓 Learning Resources

### React
- Official docs: https://react.dev
- Hooks guide: https://react.dev/reference/react/hooks
- Best practices: https://react.dev/learn

### Material-UI
- Component library: https://mui.com
- Theme customization: https://mui.com/material-ui/customization/theming/
- API reference: https://mui.com/api/

### State Management
- useState: https://react.dev/reference/react/useState
- useEffect: https://react.dev/reference/react/useEffect
- useCallback: https://react.dev/reference/react/useCallback

### Routing
- React Router: https://reactrouter.com
- Navigation: https://reactrouter.com/en/main/start/overview
- Link component: https://reactrouter.com/en/main/components/link

---

## 🛠️ Development Workflow

### Make a Feature
1. Create branch: `git checkout -b feature/name`
2. Make changes
3. Test locally
4. Commit: `git commit -m "Description"`
5. Push: `git push origin feature/name`
6. Create pull request

### Code Review Checklist
- [ ] Code is clean and readable
- [ ] No console errors
- [ ] Functionality works
- [ ] Responsive design works
- [ ] Error handling works
- [ ] No breaking changes
- [ ] Documentation updated

---

## 🔗 File Cross-Reference

### When to Edit Each File
| File | Purpose | When to Edit |
|------|---------|-------------|
| `App.js` | Routing | Add new pages |
| `App.css` | Global styles | Change theme |
| `src/api/*` | API calls | Add endpoints |
| `src/pages/*` | Page logic | Add features |
| `src/components/*` | Forms | Add fields |
| `.env` | Config | Change API URL |
| `package.json` | Dependencies | Add packages |

---

## 🎯 Common Use Cases

### Display a List
1. Fetch data in useEffect
2. Map over array in JSX
3. Add Edit/Delete buttons
4. Call handlers on click

### Create Form
1. Create dialog component
2. Use useState for form data
3. Bind inputs to state
4. Call API on submit
5. Close dialog and refresh

### Edit Item
1. Pass item to form
2. Set as initial data
3. Submit updates to API
4. Refresh list
5. Show success message

### Delete Item
1. Show confirmation dialog
2. Call API on confirm
3. Refresh list
4. Show success message

---

## 📞 Getting Help

### Stuck on Something?
1. Check documentation in this file
2. Search code comments
3. Look for similar code
4. Review Material-UI docs
5. Check React docs

### Common Issues
**Component not rendering?**
- Check if state updated
- Check if conditional rendering
- Check if CSS display is hidden

**API not working?**
- Check Network tab (F12)
- Check API endpoint URL
- Check request/response
- Check console errors

**Styling not applied?**
- Check CSS selector
- Check CSS specificity
- Check z-index
- Clear browser cache

---

**Happy Coding!** 🚀

