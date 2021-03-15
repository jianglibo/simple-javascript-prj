const top_nodes = require('./top_nodes');

test('adds 1 + 2 to equal 3', () => {
  expect(top_nodes().length).toBe(10);
});