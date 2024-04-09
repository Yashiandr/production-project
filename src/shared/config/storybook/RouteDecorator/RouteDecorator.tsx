import { Story, StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = () => (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <Suspense fallback=''>
            <StoryComponent />
        </Suspense>
    </BrowserRouter>
);
