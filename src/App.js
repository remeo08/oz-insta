import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import Chatting from './screens/Chatting';
import { GlobalStyle, darkTheme, whiteTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <HelmetProvider>
            <ThemeProvider theme={darkMode ? darkTheme : whiteTheme}>
                <GlobalStyle />
                <Router>
                    <Routes>
                        <Route
                            path={routes.home}
                            element={
                                isLogin ? (
                                    <Layout>
                                        <Home />
                                    </Layout>
                                ) : (
                                    <Login />
                                )
                            }
                        />
                        <Route path={routes.signup} element={<SignUp />} />
                        <Route
                            path={routes.profile}
                            element={
                                <Layout>
                                    <Profile />
                                </Layout>
                            }
                        />
                        <Route path={routes.chatting} element={<Chatting />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
