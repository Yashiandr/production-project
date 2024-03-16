import { useEffect } from 'react';

export function useInitilaEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
