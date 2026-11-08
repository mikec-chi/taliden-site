# Taliden website source

Source files for the Taliden marketing website. This repository contains HTML pages,
the referenced support file, image assets and uploads. It has no checked-in package
manifest or build/deployment workflow.

## Contents

- `index.html`: the default HTML entry point.
- `Taliden.dc.html`, `Platform.dc.html`, `Solutions.dc.html`, `Why-Taliden.dc.html`,
  `Governance.dc.html`: authored page exports.
- `support.js`: referenced by the pages.
- `taliden-logo.png`, `taliden-mark.png`, `uploads/`: site assets.

## Source readiness

At source revision `d28bc1d4ac479d1d50fd2aec991518603357feea`, `support.js` starts with
`<!DOCTYPE html>` and contains an HTML document rather than JavaScript. Running
`node --check support.js` with Node 22 exits 1 with `Unexpected token '<'`.
The pages also contain `<x-dc>` elements and template expressions. Recover the correct
support runtime/export from the authoring source before treating this checkout as a
verified, working site.

For file inspection, serve the checkout locally over HTTP:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then inspect `http://127.0.0.1:8000/`. Serving files does not validate the missing
runtime. Live hosting, the publishing process and the deployed site's state remain
unverified. This overview changes documentation only.
