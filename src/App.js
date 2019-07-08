import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import MainPage from "./lib/pages/MainPage/MainPage";
import SettingsPage from "./lib/pages/SettingsPage/SettingsPage";
import { Layout } from "./lib/components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from './styles/theme'
import './App.scss';
import * as mockData from './store/mockData/mockData';


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path='/current' component={() => <MainPage profile={mockData.profile} data={mockData.data} multidata2={mockData.multidata2} multidata={mockData.multidata} flag="current" />} />
                            <Route path='/month/' component={() => <MainPage profile={mockData.profile} data={mockData.data} multidata={mockData.multidata} multidata2={mockData.multidata2} flag="month" />} />
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
