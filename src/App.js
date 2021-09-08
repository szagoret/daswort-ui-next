import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, Checkbox, styled, Typography} from "@mui/material";
import Button1 from "./button1";
import {useTranslation} from "react-i18next";
import TopBar from "./components/TopBar/TopBar";
import {HashRouter, Link, Route, Switch, useHistory} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const App = () => {
    const CustomCheckbox = styled(Checkbox)(({theme}) => ({
        color: theme.status.danger,
        '&.Mui-checked': {
            color: theme.status.danger,
        },
    }));
    const {t, i18n} = useTranslation();
    return (
        <HashRouter>
            <div className="App">
                <TopBar name={t('topBar.name')}/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Typography>Astai bun</Typography>
                    <Typography>{t(`title`)}</Typography>
                    <CustomCheckbox defaultChecked/>
                    <Button1/>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
                        <Button onClick={() => i18n.changeLanguage("de")}>DE</Button>
                        <Button onClick={() => i18n.changeLanguage("ro")}>RO</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Link to="/page1" as="a">p1</Link>
                        <Link to="/page2" as="a">p2</Link>
                    </ButtonGroup>
                    <Switch>
                        <Route path="/page1" component={Page1}>
                            <Page1/>
                        </Route>
                        <Route path="/page2">
                            <Page2/>
                        </Route>
                    </Switch>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </HashRouter>
    );
};

export default App;
