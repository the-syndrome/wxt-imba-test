
# wxt-imba-test

We're testing wxt with imba entries.

## Install

```sh
npm install --ignore-scripts
```

Optionally patch imba's package.json to convert cjs to mjs file. The patch-package module wont work with the package.json.

```sh
sed -i 's/plugin.cjs/plugin.mjs/g' node_modules/imba/package.json
```

Optionally patch wxt with patch files.

```sh
npm i --package-lock-only
npx patch-package
rm package-lock.json
```

## Development

```sh
npm run dev
```

### Create a new patch

Change module in `./node_modules/wxt`

```sh
npm i --package-lock-only
npx patch-package wxt
rm package-lock.json
```
