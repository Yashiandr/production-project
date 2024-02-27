import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss'
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';



const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <Suspense fallback="">
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
};

export default App;