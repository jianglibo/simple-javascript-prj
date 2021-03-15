const f = require('./f');

var ohash = {};

test('return data', done => {
  function callback(data) {
    try {
      expect(data.content.data.length).toBeGreaterThan(0);
      done();
    } catch (error) {
      done(error);
    }
  }
  f(callback);
});