import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Layout } from "./lib/components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from './styles/theme'
import './App.scss';
import * as mockData from './store/mockData/mockData';
import {Loader} from "./lib/components/Loader/Loader";

const MainPage = React.lazy(() => import("./lib/pages/MainPage/MainPage"));
const SettingsPage = React.lazy(() => import("./lib/pages/SettingsPage/SettingsPage"));


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router basename={process.env.PUBLIC_URL}>
                        <Layout>
                            <Suspense fallback={<Loader/>}>
                                <Switch>
                                    <Route path='/current' component={() => <MainPage profile={mockData.profile} data={mockData.data} multidata2={mockData.multidata2} multidata={mockData.multidata} flag="current" />} />
                                    <Route path='/month' component={() => <MainPage profile={mockData.profile} data={mockData.data} multidata={mockData.multidata} multidata2={mockData.multidata2} flag="month" />} />
                                    <Route path='/settings' component={() => <SettingsPage />} />
                                    <Redirect to="/current"/>
                                </Switch>
                            </Suspense>
                        </Layout>
                    </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
