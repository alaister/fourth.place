/** @typedef {import('graphile-worker')} */

/** @type {GraphileConfig.Preset} */
const config = {
  worker: {
    fileExtensions: ['.js', '.cjs', '.mjs', '.ts', '.cts', '.mts'],
  },
}

module.exports = config
