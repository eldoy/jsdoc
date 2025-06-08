```
project-root/
├── jsconfig.json
├── src/
│   └── main.js
└── node_modules/
    └── shared/
        └── types/
            └── global-types.js
```

**jsconfig.json**:

```json
{
  "compilerOptions": {
    "checkJs": true,
    "baseUrl": "."
  },
  "include": ["node_modules/shared/types", "src"]
}
```

**node\_modules/shared/types/global-types.js**:

```js
// @ts-check

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {any} [data]
 */
```

**src/main.js**:

```js
// @ts-check
/// <reference path="../node_modules/shared/types/global-types.js" */

/** @type {User} */
const user = { id: 1, name: "Alice" };

/** @type {ApiResponse} */
const response = { success: true, data: user };
```
