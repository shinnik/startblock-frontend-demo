import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import MainPage from "./lib/pages/MainPage/MainPage";
import { Layout } from "./lib/components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import font from './styles/font'
import './App.scss';


function App() {
  return (
    <div className="App">
        <ThemeProvider theme={font}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={() => <MainPage/>}/>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    </div>
  );
}

export default App;
