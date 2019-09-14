import React, {Suspense} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {Layout} from "./lib/components/Layout/Layout";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import theme from './styles/theme'
import './App.scss';
import {Loader} from "./lib/components/Loader/Loader";
import useWindowSize from "@rehooks/window-size";
import './styles/fonts/manrope/web/index.css';
import './styles/fonts/robotomono/robotomono.css';
import LoginPage from "./lib/pages/LoginPage/LoginPage";
import {BACKEND_SERVER_USERDATA, BACKEND_SERVER_USERFULLDATA} from "./lib/constants/endpoints";

const MainPage = React.lazy(() => import("./lib/pages/MainPage/MainPage"));
const SettingsPage = React.lazy(() => import("./lib/pages/SettingsPage/SettingsPage"));

function App() {
    const windowSize = useWindowSize();
    return (
        <div className="App"  style={{zoom: Math.min(windowSize.innerWidth/700, 1)}}>
            <ThemeProvider theme={theme}>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route path='/login' component={() => <LoginPage/>}/>
                        <Layout>
                            <Suspense fallback={<Loader/>}>
                                <Route path='/current'
                                       component={() => <MainPage endpoint={BACKEND_SERVER_USERDATA}/>}/>
                                <Route path='/month' component={() => <MainPage endpoint={BACKEND_SERVER_USERFULLDATA}
                                                                                />}/>
                                <Route path='/settings' component={() => <SettingsPage />} />
                                <Redirect to="/current"/>
                            </Suspense>
                        </Layout>
                    </Switch>
                    </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
