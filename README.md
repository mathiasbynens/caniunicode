# Can I Unicode‽

It depends.

## Build

To generate the `output` data, run:

```sh
npm run build
```

`output` has the following subdirectories:

- [`output/delta`](https://github.com/mathiasbynens/caniunicode/tree/main/output/delta) contains one file per Unicode version that changes the JavaScript identifier grammar.
- [`output/test262`](https://github.com/mathiasbynens/caniunicode/tree/main/output/test262) contains Test262 tests based on the same data, which can be upstreamed to, respectively:
    - `identifiers` → [the `test/language/identifiers/` directory](https://github.com/tc39/test262/tree/main/test/language/identifiers)
    - `unicodeSets` → [the `test/built-ins/RegExp/unicodeSets/generated/` directory](https://github.com/tc39/test262/tree/main/test/built-ins/RegExp/unicodeSets/generated)
- `output/web` is [a small web app](https://mathiasbynens.github.io/caniunicode/) that lists Unicode version support across various JavaScript features in major browsers.
