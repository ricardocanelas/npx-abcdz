# Links

- https://torquemag.io/2019/02/developer-automation-with-npx-and-commander/

# How to do

1. Add the property 'repository'. An example:

```
{
  "name": "npx-abcdz",
  "version": "1.0.0",
  "main": "cli.js",
  "author": "Ricardo Canelas",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/ricardocanelas/npx-abcdz.git",
    "directory": "packages/cli"
  },
  "bin": {
    "npx-abcdz": "./cli.js"
  }
}
```

2. Log to NPM package

```
npm login
```

3. Publish

```
npm publish
```

# Add Version

- https://docs.npmjs.com/cli/version
- https://yarnpkg.com/lang/en/docs/cli/version/

```
npm version major | minor | patch
yarn version --major | --minor | --patch
```