const addition = require('./addition');

test('Addition de 2 et 3 doit donner 5', () => {
    expect(addition(2, 3)).toBe(5);
});
