import {createMuiTheme} from "@material-ui/core";
import {responsiveFontSizes} from "@material-ui/core/styles";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Manrope',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    header: {
        fontFamily: 'Manrope',
        fontSize: '14px',
        lineHeight: '19px',
        textAlign: 'center',
        letterSpacing: '0.75px',
        textTransform: 'uppercase',
        color: '#000000'
    }
});

export default theme = responsiveFontSizes(theme);
