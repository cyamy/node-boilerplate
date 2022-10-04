export const add =
    (x: number) =>
    (y: number): number =>
        x + y;

export const mul =
    (x: number) =>
    (y: number): number =>
        x * y;

export const hello = () => ({
    foo: 'hello',
    bar: 'world',
});

// eslint-disable-next-line no-console
console.log(`${hello().foo} ${hello().bar}`);
