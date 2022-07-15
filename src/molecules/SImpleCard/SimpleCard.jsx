import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import './styles.css';;

function SimpleCard({ title, img }) {
    return (
        <Card className="card">
            <CardMedia 
                component="img"
                sx={{ width: 32 }}
                image={img}
                alt={img}
            />
            <Typography variant="body1">{title}</Typography>
        </Card>
    );
};

export default SimpleCard;