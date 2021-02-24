const path = require('path')
const { override, addDecoratorsLegacy } = require('customize-cra')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const customize = () => (config, evn) => {
  config.resolve.alias['@'] = resolve('src')
  if (evn === 'production') {
    config.externals = {
      'react': 'React',
      "react-dom": 'ReactDom'
    }
  }
  return config
}

module.exports = override(addDecoratorsLegacy(), customize())