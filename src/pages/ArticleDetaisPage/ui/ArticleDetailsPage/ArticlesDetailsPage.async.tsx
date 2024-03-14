import { lazy } from 'react';

export const ArcticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArcticleDetailsPage')), 1500);
}));
