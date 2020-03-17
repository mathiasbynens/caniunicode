# Can I Unicode‽

It depends.

## Build

To generate the `output` data, run:

```sh
npm run build
```

`output` has the following subdirectories:

- `output/delta` contains one file per Unicode version that changes the JavaScript identifier grammar.
- `output/test262` contains Test262 tests based on the same data, which can be upstreamed to [the `test/language/identifiers/` directory](https://github.com/tc39/test262/tree/master/test/language/identifiers).
- `output/web` is a small web app that lists Unicode version support across various JavaScript features in major browsers.
