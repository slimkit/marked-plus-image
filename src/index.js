/**!
 * ----------------------------------------------------
 *  Process @![image](<id> "title")
 * ----------------------------------------------------
 *
 * @author Seven Du <shiweidu@outlook.com>
 *
 * ----------------------------------------------------
 */

const RULE = /^@!\[(.*?)\]\((\w+?)\)/;
module.exports = (marked, markdownText, options = null) => {

  const { basename } = marked.defaults;
  if (! basename) { return markdownText; }

  let lableTokens = marked.lexer(markdownText, options);
  let replaces = [];
  let token;

  while(token = lableTokens.pop()) {

    const { type, text } = token;

    if (type !== 'paragraph') { continue; }

    let pos = 0;
    let end = text.length - 1;
    let indexs = [];

    while(pos < end) {
      let index = text.indexOf('@', pos);
      if (index < 0) { pos = 0; break; }

      pos = index + 1;

      if (
        text.charAt(index - 1) === '`' ||
        text.charAt(index + 1) !== '!' ||
        text.charAt(index + 2) !== '['
      ) {
        continue;
      }

      const [ str, alt, id ] = RULE.exec(
        text.substring(index)
      ) || [];

      if (! id) { continue }

      markdownText = markdownText.replace(`${str}`, `<img src="${basename}/${id}" alt="${alt}" />`);
    }

  }

  return markdownText;
};
