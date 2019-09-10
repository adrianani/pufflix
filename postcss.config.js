const md5 = require('md5');

module.exports = {
    "modules": true,
    "plugins": {
        "autoprefixer": true,
        "postcss-modules": {
            generateScopedName: (name, filename) => {
                let buff = Buffer.from(md5(name));
                return `_${buff.toString('base64').substr(0, 4)}_${name}`;
            }
        }
    }
}