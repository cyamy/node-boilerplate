const sub =
  (x: number) =>
  (y: number): number =>
    x - y;

const div =
  (x: number) =>
  (y: number): number =>
    x / y;

const goodbye = () => ({
  baz: 'goodbye',
  qux: 'world',
});

if (import.meta.vitest) {
  const { assert, describe, it, expect } = import.meta.vitest;

  describe('calc', () => {
    it('sub', () => {
      expect(sub(2)(1)).eq(1);
    });

    it('div', () => {
      expect(div(2)(1)).eq(2);
    });

    it('goodbye', () => {
      const expectResult = {
        baz: 'goodbye',
        qux: 'world',
      };
      const result = goodbye();

      assert.deepEqual(expectResult, result);
    });
  });
}
