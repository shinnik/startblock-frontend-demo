import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import MainPage from "./lib/pages/MainPage/MainPage";
import { SettingsPage } from "./lib/pages/SettingsPage/SettingsPage";
import { Layout } from "./lib/components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from './styles/theme'
import './App.scss';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path='/current' component={() => <MainPage flag="current" />} />
                            <Route path='/month/' component={() => <MainPage flag="month" />} />
                            <Route path='/settings' component={() => <SettingsPage />} />
                            <Redirect to='/current'/>
                        </Switch>
                    </Layout>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
