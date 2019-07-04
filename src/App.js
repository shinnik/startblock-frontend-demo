import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import MainPage from "./lib/pages/MainPage/MainPage";
import { SettingsPage } from "./lib/pages/SettingsPage/SettingsPage";
import { Layout } from "./lib/components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './styles/theme'
import './App.scss';

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={() => <MainPage/>}/>
                        <Route path='/settings' component={() => <SettingsPage/>}/>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    </div>
  );
}

export default App;
