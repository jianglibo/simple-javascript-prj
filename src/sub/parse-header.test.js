const parse_header = require('./parse-header');

test('parse header accept should be */*', () => {
  expect(parse_header().headers.accept).toBe("*/*");
});