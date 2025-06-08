JSDoc supports **basic generics**, which makes it easier to use.

Most complicated generic features in TypeScript—like constraints, utility types, conditional types—are heavily tied to:

* Class hierarchies
* Interface composition
* Type-level computation
* Inheritance and structural typing

If you're using plain functions and objects (composition over inheritance), JSDoc's generics (`@template`) and basic typedefs are sufficient.

Here's a comparison:

---

### ✅ **Supported in JSDoc**

1. **Function generics**

   ```js
   /**
    * @template T
    * @param {T} value
    * @returns {T}
    */
   function identity(value) {
     return value;
   }
   ```

2. **Class generics**

   ```js
   /**
    * @template T
    */
   class Box {
     /** @param {T} value */
     constructor(value) {
       this.value = value;
     }
   }
   ```

3. **Generic type references**

   ```js
   /**
    * @template T
    * @typedef {{ value: T }} Wrapper
    */

   /** @type {Wrapper<number>} */
   const wrapped = { value: 42 };
   ```

---

### ❌ **Not Supported in JSDoc**

* **Generic constraints** (`<T extends U>`)
* **Default type parameters** (`<T = string>`)
* **Nested generics** (`Promise<Array<T>>` works poorly)
* **Generic conditional types**
* **Generic inference from usage**
* **Utility types with generics** (`Partial<T>`, `Pick<T>`, etc.)
* **Type parameter inference in complex call chains**

---

### Summary

| Feature                       | JSDoc Support | TypeScript Support |
| ----------------------------- | ------------- | ------------------ |
| Basic generics (`@template`)  | ✅             | ✅                  |
| Constraints (`<T extends X>`) | ❌             | ✅                  |
| Defaults (`<T = string>`)     | ❌             | ✅                  |
| Nested/inferred generics      | ⚠️ (fragile)  | ✅                  |
| Utility types                 | ❌             | ✅                  |

Use JSDoc generics for simple wrappers and identities.
