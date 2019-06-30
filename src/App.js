import React from 'react';
import MainPage from "./lib/pages/MainPage/MainPage";
import { Layout } from "./lib/components/Layout/Layout";
import { ThemeProvider } from '@material-ui/styles';
import font from './styles/font'
import './App.scss';


function App() {
  return (
    <div className="App">
        <ThemeProvider theme={font}>
            <Layout>
                <MainPage/>
            </Layout>
        </ThemeProvider>
    </div>
  );
}

export default App;
