import React from 'react';
import MainPage from "./lib/pages/MainPage/MainPage";
import {createMuiTheme} from "@material-ui/core";
import {responsiveFontSizes} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';


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
    palette: {
        secondary: {
            main: '#FF8282',
        },
    },
    overrides: {
        MuiPaper: {
            elevation2: {
                backgroundColor: '#0099DC',
            }
        },
        MuiTableCell: {
            head: {
                color: 'black'
            }
        }
    }
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <MainPage/>
        </ThemeProvider>
    </div>
  );
}

export default App;
