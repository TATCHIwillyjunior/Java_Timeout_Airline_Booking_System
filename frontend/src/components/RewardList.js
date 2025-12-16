import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function RewardList({ clientId }) {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    if (clientId) {
      axios.get(`/api/miles-rewards/client/${clientId}`)
        .then(res => setRewards(res.data));
    }
  }, [clientId]);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>Miles Rewards for Client {clientId}</Typography>
      <List>
        {rewards.map(r => (
          <ListItem key={r.milesRewardsId} divider>
            <ListItemText
              primary={`Flight ${r.flight?.flightsId} on ${r.dateOffer}`}
              secondary={`Discount: ${r.discountCode || "None"}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
