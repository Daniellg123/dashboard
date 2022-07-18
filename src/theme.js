import { createTheme, responsiveFontSizes } from "@mui/material";

const customTheme = responsiveFontSizes(createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'Open Sans'
        ].join(','),
        body1: {
            fontFamily: 'Montserrat',
            fontStyle: 'regular',
            fontSize: 14,
        },
        subtitle2: {
            fontFamily: 'Montserrat',
            fontSize: 28,
            fontWeight: 700,
            color: '#ED5E2E',
        },
        button: {
            fontFamily: 'Montserrat',
            fontStyle: 'bold',
            fontWeight: 700,
            fontSize: 14
        },
    },
    palette: {
        primary: {
            main: '#151515'
        },
        secondary: {
            main: '#FAFCFF'
        }
    },
}));

export default customTheme;