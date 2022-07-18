import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ButtonText({ text, color, ...props }) {
    return (
        <Button variant='contained' color={color} {...props}>
            {text}
        </Button>
    );
};

ButtonText.propTypes = {
    /**
     * Texto para mostrar dentro del boton
     */
    text: PropTypes.string.isRequired,
    /**
     * Color del botón
     */
    color: PropTypes.string
};

export default ButtonText;