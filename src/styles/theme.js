import {createMuiTheme} from "@material-ui/core";
import {responsiveFontSizes} from "@material-ui/core/styles";

let theme = createMuiTheme({
    typography: {
        h6: {
            fontSize: '26px'
        },
        h5: {
            fontSize: '38px',
        },
        h3: {
            fontSize: '44px',
            color: 'white'
        },
        body1: {
            fontSize: '15px',
            color: 'white'
        },
        body2: {
            fontSize: '24px'
        },
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
    },
    palette: {
        primary: {
            main: '#0099DC'
        },
        secondary: {
            main: '#FF8282',
        },
    },
    overrides: {
        MuiPaper: {
            elevation2: {
                backgroundColor: '#0099DC',
                borderRadius: '8px',
            }
        },
        MuiTableCell: {
            head: {
                color: 'black'
            }
        },
        MuiTableRow: {
            root: {
                height: '60px'
            }
        }
    }
});


export default theme = responsiveFontSizes(theme);
