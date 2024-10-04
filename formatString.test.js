const formatString = require('./formatString.js');

describe('Formatting of strings to be html attribute friendly', () => {
  test('String with uppercase letters', () => {
    let formattedString = formatString('Hello WORLD');
    let expected = expect.stringMatching('hello-world')

    expect(formattedString).toEqual(expected)
  });

  test('String with special characters ', () => {
    let formattedString = formatString('Hello WORLD* how&^-are yOu?');
    let expected = expect.stringMatching('hello-world-how-are-you')

    expect(formattedString).toEqual(expected)
  });
})