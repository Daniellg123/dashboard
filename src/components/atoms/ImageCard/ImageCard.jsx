import PropTypes from 'prop-types';
import { CardMedia } from '@mui/material';

/**
 * Componente para mostrar una imagen dentro de una card
 */

import './ImageCard.css';

function ImageCard({ imgDir, size }) {
    return (
        <CardMedia
            className='img'
            component='img'
            sx={{ width: size }}
            image={imgDir}
            alt={imgDir}
        />
    );
};

ImageCard.propTypes = {
    /**
     * Ruta de la imagen
     */
    imgDir: PropTypes.string,
    /**
     * Tamaño de la imagen
     */
    size: PropTypes.number
};

export default ImageCard;