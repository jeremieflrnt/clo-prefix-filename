# VS Code Snippet: Clo With File Prefix

## Overview

This Visual Studio Code (VS Code) snippet is designed to streamline your coding experience by automatically generating a `console.log` statement with a filename prefix. It's a variation of the popular `clo` snippet from the `dsznajder.es7-react-js-snippets` extension.

With this snippet, you can quickly insert a line like this:

```javascript
console.log("👀 [filename.ts:21]: variable", variable);
```

- `filename.ts` is dynamically replaced with the actual filename.
- You can easily replace variable with your own variable to log.
- An emoji is included for better readability.

## Usage

In your VS Code editor, simply type `clop` or `clo` to trigger this helpful snippet.

Enjoy simplified debugging with automatic filename prefixes for your console.log statements!

![demo](https://github.com/jeremieflrnt/clo-prefix-filename/blob/main/video-clo-prefix-filename.gif?raw=true)

### You already have clo snippet enable and want to remplace it by this snippet?

You can hide specific snippets from showing in IntelliSense (completion list) by selecting the `Hide from IntelliSense` button to the right of snippet items in the `Insert Snippet` command dropdown (press `cmd+shift+P | ctrl+shift+P`).

![hide from intellisense](https://github.com/jeremieflrnt/clo-prefix-filename/blob/main/hide-from-intellisense.png?raw=true)

[Source](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_can-i-remove-snippets-from-intellisense)

## NEW snippet added

A new snippet is available to allow debugging of complex object with nested objects and/or arrays.

Instead of your typical `console.log`, you can use `clodir` or `clopdir` to print the object correctly.

No more `[Object]` that you want to print also!

```
ComplexObject {
  a: { b: true, c: [ 1, 2, 3 ], d: { e: 'Nested String', f: [Object] } }
}
```

![demo](https://github.com/jeremieflrnt/clo-prefix-filename/blob/main/video-clodir.gif?raw=true)

```javascript
// This will print the entire object structure with details
console.dir(myComplexObject, { showHidden: false, depth: null, colors: true });
```

## To create package

Change npm package version and run:

`vsce package`
