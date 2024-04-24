# VS Code Snippet: Clo With File Prefix

## Overview

This Visual Studio Code (VS Code) snippet is designed to streamline your coding experience by automatically generating a `console.log` statement with a filename prefix. It's a variation of the popular `clo` snippet from the `dsznajder.es7-react-js-snippets` extension. It is also compatible with **intelliSense**.

With this snippet, you can quickly insert a line like this:

```javascript
console.log("👀 [filename.ts:21]: variable", variable);
```

- `filename.ts` is dynamically replaced with the actual filename.
- You can easily replace variable with your own variable to log.
- An emoji is included for better readability.

### A hack to have intelliSense

In fact, if we want to have intelliSense available, it is required to have your first cursor not in a string, so what it actually does is this:

```javascript
console.log(...[variable, "👀 [filename.ts:21]: variable"].reverse());
```

The first cursor will not be in a string so intelliSense will work and then with `reverse()` and the spread operator, we can go back to the desired log.

## Usage

In your VS Code editor, simply type `clo` or `clop` to trigger this helpful snippet.

Enjoy simplified debugging with automatic filename prefixes for your console.log statements!

![demo](https://github.com/jeremieflrnt/clo-prefix-filename/blob/main/video-clo-prefix-filename.gif?raw=true)

### You already have clo snippet enable and want to remplace it by this snippet?

You can hide specific snippets from showing in IntelliSense (completion list) by selecting the `Hide from IntelliSense` button to the right of snippet items in the `Insert Snippet` command dropdown (press `cmd+shift+P | ctrl+shift+P`).

![hide from intellisense](https://github.com/jeremieflrnt/clo-prefix-filename/blob/main/hide-from-intellisense.png?raw=true)

[Source](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_can-i-remove-snippets-from-intellisense)

## 2 NEW snippets added

To display objects in 2 different ways:

`clodir`/`clopdir` and `cloobj`/`clopobj`

![demo](https://github.com/jeremieflrnt/clo-prefix-filename/blob/main/video-clodir.gif?raw=true)

### clodir: use console.dir to print a object (suitable for big object as it can be collapse/expand)

A new snippet is available to allow debugging of complex object with nested objects and/or arrays.

Instead of your typical `console.log`, you can use `clodir` or `clopdir` to print the object correctly.

If you use it on a browser, it will be display collapsed, with features to expand only some keys, etc!

No more `[Object]` that you want to print also!

```json
ComplexObject {
  a: { b: true, c: [ 1, 2, 3 ], d: { e: 'Nested String', f: [Object] } }
}
```

Instead, print:

```json
ComplexObject {
  a: {
    b: true,
    c: [ 1, 2, 3 ],
    d: { e: 'Nested String', f: { g: 'Another Nested String' } }
  },
  h: [ { prop: 'value' }, { prop: 'another value' } ]
}
```

What's behind is a `console.dir`

```javascript
// This will print the entire object structure with details
console.dir(myComplexObject, { showHidden: false, depth: null, colors: true });
```

### cloobj: use console.log to print an object as a string (not for big object)

If you want a cleaner representation of an object, `cloobj` can be useful. But do not use it for big object, as it will print all of it in the console, that can quickly make it unreadable!

It will be displayed like this:

```json
👀 [example.js:37] myComplexObject:
 {
  "a": {
    "b": true,
    "c": [
      1,
      2,
      3
    ],
    "d": {
      "e": "Nested String",
      "f": {
        "g": "Another Nested String"
      }
    }
  },
  "h": [
    {
      "prop": "value"
    },
    {
      "prop": "another value"
    }
  ]
}
```

## To create package

Change npm package version and run:

`vsce package`
