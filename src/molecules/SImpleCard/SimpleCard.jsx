import { Card, Typography } from "@mui/material";
import ImageCard from "../../atoms/ImageCard/ImageCard";

import './styles.css';;

function SimpleCard({ title, img }) {
    return (
        <Card className="card">
            <ImageCard imgDir={img} size={32} />
            <Typography variant="body1">{title}</Typography>
        </Card>
    );
};

export default SimpleCard;