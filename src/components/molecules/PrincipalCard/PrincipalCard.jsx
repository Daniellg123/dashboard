import PropTypes from "prop-types";
import { Card, Typography, Divider } from "@mui/material";
import ImageCard from "../../atoms/ImageCard/ImageCard";

import './PrincipalCard.css';

/**
 * Componente para la información principal
 */

function PrincipalCard({ img, title, units, users, selected }) {
    return (
        <Card className="card" sx={selected ? {borderColor:'#ED5E2E'} : { borderColor:'#ABB0B9' }}>
            <div className="content">
                <ImageCard imgDir={img} size={48} />
                <Typography variant="body2">{title}</Typography>
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
    users: PropTypes.number,
    /**
     * Booleano para saber si está seleccionado
     */
    selected: PropTypes.bool
};

export default PrincipalCard;