import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  CircularProgress,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { getMilesRewards, getMilesRewardsByClient } from "../api/milesRewardApi";

export default function RewardsPage() {
  const [clientId, setClientId] = useState("");
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allRewards, setAllRewards] = useState([]);

  useEffect(() => {
    fetchAllRewards();
  }, []);

  const fetchAllRewards = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getMilesRewards();
      setAllRewards(response.data);
    } catch (err) {
      setError("Error loading rewards.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!clientId) {
      setError("Please enter a client ID");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await getMilesRewardsByClient(clientId);
      setRewards(response.data);
    } catch (err) {
      setError("Error loading rewards for this client.");
      console.error(err);
      setRewards([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <h2>Miles Rewards Management</h2>

      {/* Search Section */}
      <Card sx={{ mb: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Search Rewards by Client
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
          <TextField
            label="Client ID"
            placeholder="Enter client ID"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </Box>

        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      </Card>

      {/* Client Rewards Section */}
      {clientId && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Rewards for Client {clientId}
          </Typography>

          {loading && <CircularProgress />}

          {!loading && rewards.length === 0 && (
            <Alert severity="info">No rewards found for this client.</Alert>
          )}

          {rewards.length > 0 && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell>Client ID</TableCell>
                    <TableCell>Flight ID</TableCell>
                    <TableCell>Flight Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rewards.map((reward, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{reward.client?.clientId}</TableCell>
                      <TableCell>{reward.flight?.flightNo}</TableCell>
                      <TableCell>{reward.dateOffer}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {rewards.length >= 3 && (
            <Alert severity="success" sx={{ mt: 2 }}>
              ✓ This client has completed 3 or more flights! A discount code has been
              generated.
            </Alert>
          )}
        </Box>
      )}

      {/* All Rewards Section */}
      <Typography variant="h6" gutterBottom>
        All Miles Rewards
      </Typography>

      {loading && <CircularProgress />}

      {!loading && (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell>Client ID</TableCell>
                <TableCell>Flight ID</TableCell>
                <TableCell>Flight Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allRewards.map((reward, idx) => (
                <TableRow key={idx}>
                  <TableCell>{reward.client?.clientId}</TableCell>
                  <TableCell>{reward.flight?.flightNo}</TableCell>
                  <TableCell>{reward.dateOffer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
