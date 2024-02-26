import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss'
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { ThemeContext, Theme } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const bool = true;

    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;