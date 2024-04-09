import { StoryContext, StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme?: Theme) => (StoryComponent: StoryFn, context: StoryContext) => {
    return (
        <ThemeProvider initialTheme={theme ?? context.globals.theme}>
            <div className={`app ${theme ?? context.globals.theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
