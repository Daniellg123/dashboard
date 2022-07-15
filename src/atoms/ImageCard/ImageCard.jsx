import { CardMedia } from '@mui/material';

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

export default ImageCard;