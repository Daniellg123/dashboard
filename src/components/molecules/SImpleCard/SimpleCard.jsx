import PropTypes from "prop-types";
import { Card, Typography } from "@mui/material";
import ImageCard from "../../atoms/ImageCard/ImageCard";

import './styles.css';

/**
 * Componente para mostrar solo la imagen y el titulo
 */

function SimpleCard({ title, img }) {
    return (
        <Card className="simpleCard">
            <ImageCard imgDir={img} size={32} />
            <Typography variant="body1">{title}</Typography>
        </Card>
    );
};

SimpleCard.propTypes = {
    /**
     * Titulo del card
     */
    title: PropTypes.string,
    /**
     * Ruta de la imagen
     */
    img: PropTypes.string
};

export default SimpleCard;