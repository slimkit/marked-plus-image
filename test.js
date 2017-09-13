const image = require('./src');
const marked = require('marked');
const assert = require('assert');

let markdownText = `

@![One](1) @![4](4)

Twe: @![Twe](2)

haha \`@![haha test](3)\`

sha?

\`\`\`php
<?php
@![haha test](5)
$a = 1;
\`\`\`

demo *ha*
@![One]()
@![](6)
`;

marked.setOptions({
  gfm: true,
  basename: 'https://plus.io'
});

console.log('Test markdown:', marked(image(marked, markdownText)));

assert.strictEqual(image(marked, '@![](1)'), `<img src="${marked.defaults.basename}/1" alt="" />`);
assert.strictEqual(image(marked, '@![1](1)'), `<img src="${marked.defaults.basename}/1" alt="1" />`);
assert.strictEqual(image(marked, '@![1]()'), '@![1]()');
assert.strictEqual(image(marked, '@[1](1)'), '@[1](1)');

console.log('4 tests are running successfully!');
