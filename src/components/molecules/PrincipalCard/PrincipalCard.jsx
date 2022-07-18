import PropTypes from "prop-types";
import { Card, Typography, Divider } from "@mui/material";
import ImageCard from "../../atoms/ImageCard/ImageCard";

import './PrincipalCard.css';

function PrincipalCard({ img, title, units, users }) {
    return (
        <Card className="card">
            <div className="content">
                <ImageCard imgDir={img} size={48} />
                <Typography variant="body1">{title}</Typography>
            </div>
            <Divider variant="middle"/>
            <div className="content">
                <div className="info">
                    <Typography variant="body2">{units}</Typography>
                    <Typography variant="body1">Units</Typography>
                </div>
                <Divider orientation="vertical" />
                <div className="info">
                    <Typography variant="body2">{users}</Typography>
                    <Typography variant="body1">Users</Typography>
                </div>
            </div>
        </Card>
    );
};

PrincipalCard.propTypes = {
    /**
     * Ruta de la imagen
     */
    img: PropTypes.string, 
    /**
     * Titulo del card
     */
    title: PropTypes.string,
    /**
     * Número de units
     */
    units: PropTypes.number, 
    /**
     * Número de users
     */
    users: PropTypes.number
};

export default PrincipalCard;