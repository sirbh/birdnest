import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "../card";
import { CircularProgress, Grid, Typography } from "@mui/material";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8080/");

interface IPilotDroneState {
  [k: string]: {
    name: string;
    phone: string;
    email: string;
    distance: number;
    timestamp: number;
  };
}

export default function Container() {
  const [pilotList, setPilotList] = useState<IPilotDroneState>();
  const [isConnected, setIsConnected] = useState(false);
  const [intruder, setIntruder] = useState<number>(0);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("droneData", (data) => {
      setPilotList(data);
      setIntruder(Object.keys(data).length);
    });

    return () => {
      socket.off("connect");
      socket.off("droneData");
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        padding: "30px 10px 0px 10px",
        flexDirection: "row-reverse",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <CircularProgress />
        <Typography>Scanning the nest area</Typography>
        <Typography>
          Total Intruders:<span style={{ color: "red" }}>{intruder}</span>
        </Typography>
      </div>
      <Grid container spacing={2}>
        {pilotList === undefined ? (
          <div></div>
        ) : (
          Object.keys(pilotList!).map((e) => {
            return (
              <Grid item xs={4} key={e}>
                <Card
                  distance={pilotList![e].distance}
                  email={pilotList![e].email}
                  name={pilotList![e].name}
                  phone={pilotList![e].phone}
                ></Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  );
}
