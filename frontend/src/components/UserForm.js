import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function UserForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phoneNo: "",
    birthDate: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/users", form);
    alert("User created!");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>User Registration</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="First Name" name="firstname" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Last Name" name="lastname" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Email" name="email" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Address" name="address" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Phone" name="phoneNo" onChange={handleChange} />
        <TextField fullWidth margin="normal" type="date" name="birthDate" onChange={handleChange} InputLabelProps={{ shrink: true }} />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Create User</Button>
      </form>
    </Box>
  );
}
