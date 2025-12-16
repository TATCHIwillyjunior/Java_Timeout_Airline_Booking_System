import React, { useState } from "react";
import RewardList from "../components/RewardList";

export default function RewardsPage() {
  const [clientId, setClientId] = useState("");

  return (
    <div>
      <h2>Miles Rewards</h2>
      <input
        placeholder="Enter Client ID"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
      />
      {clientId && <RewardList clientId={clientId} />}
    </div>
  );
}
