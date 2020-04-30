const webpack = require('webpack');

const compile = () => new Promise((resolve, reject) => {
    webpack({}).run((err) => {
        if (err) reject(err);
        resolve();
    });
});

beforeEach(() => {
    jest.resetModules();
});

test('test1', async () => {
    await expect(
        compile()
    ).resolves.not.toThrow();
});

test('test2', async () => {
    await expect(
        compile()
    ).resolves.not.toThrow();
});