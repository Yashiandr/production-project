module.exports = (componentName) => `import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './${componentName}.module.scss';

interface ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>

        </div>
    );
});

${componentName}.displayName = '${componentName}';
`;
