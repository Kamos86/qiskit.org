/**
 * @license
 *
 * Copyright (c) Freestyle Stats and its affiliates.
 *
 * This source code is licensed under the MIT license found in the LICENSE.txt
 * file in the root directory of this source tree.
 */

module.exports = {
  staticFileGlobs: ['src/**/*', 'manifest.json'],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest',
    },
  ],
};
