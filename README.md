# node-boilerplate

my node project's boilerplate.
support in-source testing.

## using packages

-   [ts-node](https://github.com/TypeStrong/ts-node)
-   [nodemon](https://github.com/remy/nodemon)
-   [vitest](https://github.com/vitest-dev/vitest)
-   [unbuild](https://github.com/unjs/unbuild)
-   [prettier](https://github.com/prettier/prettier)
-   [eslint](https://github.com/eslint/eslint) (with TypeScript settings)
-   [husky](https://github.com/typicode/husky)
-   [lint-staged](https://github.com/okonet/lint-staged)

## package manager

-   [pnpm](https://github.com/pnpm/pnpm)
-   [ni](https://github.com/antfu/ni)

## commands

-   `nr dev` watch `src/index.ts`
-   `nr test` run vitest
-   `nr test:watch` run vitest with watch mode
-   `nr test:coverage` show test coverage
-   `nr build` create build file
-   `nr preview` exec build file

## in-source testing sample

```ts
const sub =
    (x: number) =>
    (y: number): number =>
        x - y;

const div =
    (x: number) =>
    (y: number): number =>
        x / y;

const goodbye = () => {
    return {
        baz: 'a disruption and blinder',
        qux: 'mn..',
    };
};

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
            const actual = goodbye();

            assert.deepEqual(actual, {
                baz: 'a disruption and blinder',
                qux: 'mn..',
            });
        });
    });
}
```
