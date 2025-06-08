To fully leverage JSdoc types (simple way):

- Do not autoload into objects, use require explicitly instead
  - this would enable jump to definition as well

That’s the practical minimum in JS:

* **JSDoc for DB collections**:

  ```js
  /** @typedef {{ id: string, name: string, createdAt: Date }} User */
  ```

* **JSDoc for API responses**:

  ```js
  /** @typedef {{ success: boolean, data?: any, error?: string }} ApiResponse */
  ```

* **JSDoc for utilities**:

  ```js
  /**
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) { ... }
  ```

That gives you:

* Auto-complete
* Type hints
* Lint-level safety

No need for TypeScript. Just enough structure for maintainability.
