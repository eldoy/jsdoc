# Why We Use JSDoc Instead of TypeScript

We use JSDoc to keep our codebase simple, fast, and easy to maintain.

Our focus:

- ⚙️ Minimal tooling
- ⚡ Fast dev cycles
- ✨ Clean, flexible JS
- 🧩 Native compatibility
- 👋 Easy onboarding
- 🚫 No build steps or lock-in

TypeScript adds complexity—build systems, strict rules, and heavy tooling. It slows down dev and forces tradeoffs we don't need.

With JSDoc + `@ts-check`, `tsc --noEmit`, and ESLint, we get strong type checking and editor support—without the overhead.

## JSDoc vs TypeScript

| Feature                 | JSDoc (`@ts-check`) ✅ | TypeScript (`.ts`) ❌ |
|------------------------|------------------------|------------------------|
| Compile step           | ✅ None                 | ❌ Required            |
| Tooling complexity     | ✅ Low                  | ❌ High                |
| Runtime compatibility  | ✅ Native JS            | ❌ Needs transpilation |
| Editor support         | ✅ Full                 | ✅ Full                |
| Incremental adoption   | ✅ Per-file             | ❌ Whole project       |
| Build artifacts        | ✅ None                 | ❌ `.js`, `.d.ts`, `.map` |
| External types         | ✅ Optional             | ❌ Required            |
| Dynamic code support   | ✅ Native               | ❌ Limited             |
| Readability            | ✅ Unchanged            | ❌ Often reduced       |
| Ecosystem lock-in      | ✅ None                 | ❌ High                |

**Why JSDoc Works Better for Us**

**1. Native Workflow** – Run `.js` directly, no output files
**2. Minimal Setup** – No compiler, no new syntax
**3. Full JS Compatibility** – Works with dynamic/runtime/metaprogramming
**4. Selective Typing** – Use `@ts-check` where needed
**5. Full Editor Support** – Autocomplete, tooltips, jump-to-def
**6. Low Maintenance** – Fewer type updates, no rewrites
**7. Fast Dev** – No compile delays, fewer false errors
**8. Lint-Ready** – ESLint, Prettier, `eslint-plugin-jsdoc`
**9. No `@types` Overhead** – Optional use only
**10. Cleaner Code** – Functions and primitives over abstract types

**What We Avoid**

- Build clutter
- Slower workflows
- Fragile types
- Breaking updates
- Type package churn
- Limited dynamic support
- Non-standard syntax
- Long-term type debt

**TypeScript: Tradeoffs**

JSDoc is slightly more verbose but avoids rare, complex features like conditional and mapped types. Covers ~90% of practical needs.

**Best Use Cases for JSDoc**

- API definitions
- Utility functions
- DB schemas
- Plugin/middleware interfaces
- Dynamic or mixed JS projects

**Final Take**

JSDoc gives us type safety, clarity, and tooling—without TypeScript's cost. Best for fast, flexible, native JavaScript workflows.
