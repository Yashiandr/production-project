import { lazy } from 'react';

export const ArcticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
