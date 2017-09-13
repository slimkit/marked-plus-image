# marked-plus-image

> ThnkSNS+ image syntax plugin for marked markdown parser.

Required `marked` .

Syntax is `@![title](id)` tag.

## Install

npm, yarn

```shell
npm i marked-plus-image --save
yarn add marked-plus-image
```

## Use

```js
import marked from 'marked';
import plusImagePlugin from 'marked-plus-image';

const markdownText = '...'; // The is you markdown text.
const html = marked(
    plusImagePlugin(marked, markdownText)
);

```

## License

[Apache-2.0](LICENSE)
