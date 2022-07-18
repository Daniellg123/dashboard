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
            fontWeight: 400,
            fontSize: 14,
            color: '#50565E'
        },
        body2: {
            fontFamily: 'Montserrat',
            fontStyle: 'regular',
            fontWeight: 600,
            fontSize: 14,
            color: '#3C4047'
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
            fontSize: 14,
            color: '#fff'
        },
    },
    palette: {
        primary: {
            main: '#151515'
        },
        secondary: {
            main: '#FAFCFF'
        },
        green: {
            main: '#26A798',
            contrastText: '#fff'
        },
        gray: {
            main: '#7C828B',
            gray40: '#C4C8CF'
        }
    },
}));

export default customTheme;