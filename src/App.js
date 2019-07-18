import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Layout } from "./lib/components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from './styles/theme'
import './App.scss';
import {Loader} from "./lib/components/Loader/Loader";
import useWindowSize from "@rehooks/window-size";
import './styles/fonts/manrope/web/index.css';
import './styles/fonts/robotomono/robotomono.css';

const MainPage = React.lazy(() => import("./lib/pages/MainPage/MainPage"));
const SettingsPage = React.lazy(() => import("./lib/pages/SettingsPage/SettingsPage"));


function App() {
    const windowSize = useWindowSize();

    return (

        <div className="App"  style={{zoom: Math.min(windowSize.innerWidth/700, 1)}}>
            <ThemeProvider theme={theme}>
                <Router basename={process.env.PUBLIC_URL}>
                        <Layout>
                            <Suspense fallback={<Loader/>}>
                                <Switch>
                                    <Route path='/current' component={() => <MainPage flag="current" />} />
                                    <Route path='/month' component={() => <MainPage flag="month" />} />
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