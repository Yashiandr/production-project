const fs = require('fs/promises');
const firstCharUpperCase = require('../firstCharUpperCase');
const resolveRoot = require('../resolveRoot');

const publicApiTemplate = (sliceName) => {
    const componentName = firstCharUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;
    return `export { ${componentName} } from './ui/${componentName}/${componentName}';

export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';
`;
};

module.exports = async (layer, sliceName) => {
    const resolvePublicApiPath = resolveRoot('src', layer, sliceName, 'index.ts');

    const createPublicApi = async () => {
        try {
            await fs.writeFile(
                resolvePublicApiPath,
                publicApiTemplate(sliceName),
            );
        } catch (e) {
            console.log('не удалось создать public api', e);
        }
    };

    await createPublicApi();
};
