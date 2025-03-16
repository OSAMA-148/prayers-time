import React from 'react'
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import { Grid2, Stack } from '@mui/material';
import Prayer from './Prayer';

export default function Maincontent() {
  return (
      <>
          {/* top row */}
          <Grid2 container >
              <Grid xs={6}>
                  <div>
                      <h2>9 سمبتمبر 2025</h2>
                      <h1></h1>
                  </div>
              </Grid>
              <Grid xs={6}>
                  <div>
                      <h2>موعد الصلاه القادمه </h2>
                      <h1></h1>
                  </div>
              </Grid>
          </Grid2>
          {/* row  */}
          <Divider style={{ borderColor: "white", opacity: "0.1" }} />
          {/* Prayers card  */}
          <Stack
              direction="row"
              justifyContent={"space-around"}
              style={{ marginTop: "50px" }}
          >
              <Prayer
                  name="الفجر"
                  image="public/images/fajr.webp"
                  time="4:45"
              />
              <Prayer
                  name="الظهر"
                  image="public/images/duhor.webp"
                  time="4:45"
              />
              <Prayer
                  name="العصر"
                  image="public/images/asar.webp"
                  time="4:45"
              />
              <Prayer
                  name="المغرب"
                  image="public/images/maghreb.webp"
                  time="4:45"
              />
              <Prayer
                  name="العشاء"
                  image="public/images/isha.webp"
                  time="4:45"
              />
          </Stack>
          {/* Prayers card  */}
      </>
  );
}
