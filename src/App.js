import React from 'react';
import MainPage from "./lib/pages/MainPage/MainPage";
import {createMuiTheme} from "@material-ui/core";
import {responsiveFontSizes} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';

let theme = createMuiTheme();
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
