JSDoc can't fully express the following TypeScript features:

1. **Type aliases with generics**

   ```ts
   type Result<T> = { data: T, error?: string }
   // No equivalent in JSDoc
   ```

2. **Template literal types**

   ```ts
   type Lang = `lang-${'en' | 'fr'}`
   ```

3. **Mapped types**

   ```ts
   type Flags<T> = { [K in keyof T]: boolean }
   ```

4. **Conditional types**

   ```ts
   type IsString<T> = T extends string ? true : false
   ```

5. **Tuple labels and rest elements**

   ```ts
   type Coords = [x: number, y: number, ...rest: number[]]
   ```

6. **Enums (with runtime representation)**
   JSDoc can describe enum-like objects, but not actual TS `enum` types.

7. **Discriminated unions (pattern-matching on a tag)**
   You can approximate with `@typedef` + `@property`, but not enforce discriminants.

8. **Utility types (e.g. `Partial<T>`, `Pick<T>`, `Omit<T>`)**
   You have to define the result manually in JSDoc.

9. **Type augmentation/merging**
   TypeScript allows merging interfaces/types across files; JSDoc can’t.

10. **Ambient declarations**
    `declare module`, `declare global`, `declare const` etc. are not expressible in pure JSDoc.

In short: JSDoc supports **basic types, object shapes, function signatures, unions, generics (poorly)**—but not complicated type system capabilities like transformations, inference, or meta-types.
