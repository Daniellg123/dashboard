import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ButtonText({ text }) {
    return (
        <Button variant='contained'>
            {text}
        </Button>
    );
};

ButtonText.propTypes = {
    /**
     * Texto para mostrar dentro del boton
     */
    text: PropTypes.string.isRequired,
};

export default ButtonText;