import * as React from "react";
import { Card,Typography } from "@mui/material";

interface BasicCardProps {
  name: string;
  phone: string;
  email: string;
  distance: number;
}

export default function BasicCard({
  name,
  phone,
  email,
  distance,
}: BasicCardProps) {
  return (
    <Card variant="outlined" sx={{ width: "auto", padding: "10px 30px" }}>
      <Typography sx={{ display: "inline", fontSize: 12 }}>
        name: {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: "block",
          position: "relative",
          color: "red",
          fontSize: 12,
        }}
      >
        closest distance: {distance.toFixed(2)}meters
      </Typography>
      <hr></hr>
      <Typography variant="body2" sx={{ position: "relative", fontSize: 12 }}>
        Contact Details
      </Typography>
      <Typography sx={{ color: "gray", fontSize: 10  }}>email: {email}</Typography>
      <Typography sx={{ color: "gray", fontSize: 10 }}>
        phone: {phone}
      </Typography>
    </Card>
  );
}
