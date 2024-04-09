import { DecoratorFunction } from '@storybook/addon-actions/*';
import { ReactRenderer, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = () => (StoryComponent: StoryFn) => <StoryComponent />;
