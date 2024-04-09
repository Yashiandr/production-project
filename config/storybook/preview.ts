import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator(),
        ThemeDecorator(),
        RouteDecorator(),
    ],
    globalTypes: {
        theme: {
            description: 'Global theme for component',
            defaultValue: Theme.LIGHT,
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [Theme.LIGHT, Theme.DARK, Theme.ORANGE],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
