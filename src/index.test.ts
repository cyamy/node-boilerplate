import { add, mul, hello } from './index';

describe('calc', () => {
  it('add', () => {
    expect(add(1)(1)).eq(2);
  });

  it('mul', () => {
    expect(mul(2)(2)).eq(4);
  });

  it('hello', () => {
    const expectResult = {
      foo: 'hello',
      bar: 'world',
    };

    const result = hello();

    assert.deepEqual(expectResult, result);
  });
});
