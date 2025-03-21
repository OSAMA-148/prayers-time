import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function MediaCard({ name, time, image }) {
    return (
        <Card sx={{ width: "15vw" }}>
            <CardMedia
                sx={{ height: 179 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <h2>{name}</h2>

                <Typography variant="h1" color="text.secondary">
                    {time}
                </Typography>
            </CardContent>
        </Card>
    );
}
