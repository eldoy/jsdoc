# Introduction and Philosophy

Our decision to use JSDoc over TypeScript is based on principles that prioritize simplicity, speed, clarity, and maintainability. We value:

- Minimal configuration and tooling
- Faster development cycles
- Low cognitive overhead
- Readable, flexible code
- Subsets over supersets
- Stability and backward compatibility
- Code sharing between apps and libraries
- Easy onboarding and universal JavaScript

We prefer tools that enhance flow, not interrupt it. We believe in staying close to native JavaScript and avoiding unnecessary abstraction. Type systems should serve the code—not dominate it.

TypeScript moves against these goals. It adds complexity, enforces ceremony, introduces build steps, and creates friction across teams. It favors rigidity over flexibility, and supersets over simplicity.

It has also fragmented the ecosystem. Promoted as a default by a large corporation, TypeScript is often adopted because of hype, not need. The result is more technical debt, more tooling lock-in, and slower iteration cycles—especially when projects don’t benefit from its full type system.

JSDoc is a powerful alternative, but it remains underhyped. Most teams don’t use it not because it’s lacking, but because they don’t know how capable it is. Combined with `@ts-check`, `tsc --noEmit`, and ESLint, JSDoc gives you nearly all the benefits of TypeScript—without the complexity or overhead.

This document is intended to clarify that choice, and to promote JSDoc as a modern, effective, and often superior solution for real-world JavaScript development.


## Why We Use JSDoc Instead of TypeScript

JSDoc with `// @ts-check`, `tsc --noEmit`, and ESLint offers a lightweight, powerful, and maintainable alternative to TypeScript. It provides type safety, documentation, and editor support—without introducing runtime overhead, compile steps, or rigid tooling.

This approach keeps JavaScript fast, flexible, and familiar, while still delivering the most important benefits of a typed system.

---

## Summary: JSDoc vs TypeScript

| Feature                     | JSDoc (`@ts-check`)        | TypeScript (`.ts`)            |
|----------------------------|----------------------------|-------------------------------|
| Compile step               | ✅ None                    | ❌ Required                   |
| Tooling complexity         | Minimal                    | High                          |
| Runtime compatibility      | Native JS                  | Needs transpile               |
| Editor support             | Full (VSCode, LSP)         | Full                          |
| Incremental adoption       | Per-file (`@ts-check`)     | Project-wide only             |
| Build artifacts            | None                       | `.js`, `.d.ts`, `.map`, etc.  |
| External type maintenance  | Not needed                 | Required (`@types`)           |
| Flexibility with dynamic code | Native                  | Limited / verbose             |
| Code readability           | Unaffected                 | Altered by syntax             |
| Ecosystem lock-in          | None                       | Strong                        |

---

## Benefits of Using JSDoc with `@ts-check`

### 1. No Generated Code
- You write `.js` and run `.js`
- No `.d.ts`, `.map`, or output folders to manage

### 2. Simple, Native Setup
- No build tooling
- No compiler
- No file renaming or language switching

### 3. Works with All JavaScript
- Full compatibility with dynamic logic, proxies, runtime imports, monkey-patching
- Supports direct editing in `node_modules` without breaking types

### 4. Incremental Adoption
- Type-check only the files you care about with `// @ts-check`
- Leave the rest untyped, or document only critical APIs and utilities

### 5. Editor-First Experience
- Autocomplete, hover info, jump-to-definition all work out of the box
- Supported by VSCode, WebStorm, Neovim, and LSP-based editors

### 6. Less Maintenance
- Avoid fragile type chains, generics, and inference gymnastics
- Don’t spend time rewriting types after valid code changes

### 7. Faster Development
- No build delay
- No recompile loop
- Fewer blockers caused by irrelevant type errors

### 8. Flexible Linting
- Use `eslint-plugin-jsdoc` for documentation enforcement
- Combine with Prettier and standard ESLint rules
- Can even use `tsc --noEmit` for type checking

### 9. No External Type Dependencies
- No need for `@types/*` or third-party declarations, but can optionally be added
- Less friction when installing or updating libraries

### 10. Encourages Simpler Code
- Promotes functions and plain objects over classes and inheritance
- Keeps type usage close to code, not abstracted into type systems

---

## What You Avoid by Skipping TypeScript

### 1. Compiled Output and File Bloat
- `.ts` → `.js` + `.map` + `.d.ts`
- Clutters codebases and complicates deployment

### 2. Slower Development Workflow
- Compilation delays, invalid build states, and IDE sync issues

### 3. Breaking Updates from Dependencies
- Type mismatches on minor library upgrades
- Constant type churn unrelated to runtime logic

### 4. Time Wasted Fixing Type Errors in Working Code
- Need to "please the compiler" even when logic is correct

### 5. Dependency on `@types`
- Missing, incorrect, or mismatched type packages
- Breakage from stale or abandoned typings

### 6. Refactor Overhead
- Changing code often breaks unrelated types
- High cost of internal refactoring

### 7. Poor Fit for Dynamic or Flexible Code
- Requires workarounds for patterns JS handles natively

### 8. Tooling Lock-In and Language Divergence
- TypeScript becomes its own language with separate syntax, semantics, and limitations

### 9. Technical Debt in Types
- Accumulation of abstracted types, interfaces, and generics that must be maintained
- Typescript is much harder to master than Javascript

---

### Typescript advantages

JSDoc can be slightly more verbose, but this is easily mitigated with editor snippets and templates. It covers at least 90% of common type use cases in real-world projects.

Some complex types—like conditional types, mapped types, or deep generics—can’t be fully expressed in JSDoc. However, these are rarely needed and often introduce unnecessary complexity.

By staying within the bounds of JSDoc, the codebase remains simpler and more readable. It naturally encourages the use of functions and primitives over classes, inheritance, and abstract type hierarchies.

## Ideal Use Cases for JSDoc

Using JSDoc you can cover most of the code your application is using to get type checking, inline docs and auto-complete.

- Backend APIs (request/response typing)
- Utility libraries and helper functions
- Database schema documentation
- Middleware and plugins with known input/output
- Mixed codebases with dynamic logic
- Projects that value speed, clarity, and runtime behavior over compile-time constraints

---

TypeScript adds a complex type system and compile step to achieve safety and tooling. JSDoc delivers nearly all the same benefits—type checking, autocomplete, and inline documentation—without introducing runtime overhead, build complexity, or lock-in.

For teams that prioritize clarity, speed, and maintainability, JSDoc with `@ts-check` is not just practical and sustainable—it’s often the more efficient and superior choice.
