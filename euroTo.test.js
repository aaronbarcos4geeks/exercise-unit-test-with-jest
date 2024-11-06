const { fromEuroToDollar, fromEuroToYen, fromEuroToPound, oneEuroIs } = require('./euroTo.js');

describe("Currency conversion from Euro", () => {

    test("should correctly convert Euro to Dollar", () => {
        const valueInEuro = 3.5;
        const expected = valueInEuro * oneEuroIs.USD;
        expect(fromEuroToDollar(valueInEuro)).toBe(expected);
    });

    test("should correctly convert Euro to Yen", () => {
        const valueInEuro = 3.5;
        const expected = valueInEuro * oneEuroIs.JPY;
        expect(fromEuroToYen(valueInEuro)).toBe(expected);
    });

    test("should correctly convert Euro to Pound", () => {
        const valueInEuro = 3.5;
        const expected = valueInEuro * oneEuroIs.GBP;
        expect(fromEuroToPound(valueInEuro)).toBe(expected);
    });

    test("should return 0 when converting 0 Euro", () => {
        expect(fromEuroToDollar(0)).toBe(0);
        expect(fromEuroToYen(0)).toBe(0);
        expect(fromEuroToPound(0)).toBe(0);
    });

    test("should handle negative values correctly", () => {
        const valueInEuro = -3.5;
        expect(fromEuroToDollar(valueInEuro)).toBe(valueInEuro * oneEuroIs.USD);
        expect(fromEuroToYen(valueInEuro)).toBe(valueInEuro * oneEuroIs.JPY);
        expect(fromEuroToPound(valueInEuro)).toBe(valueInEuro * oneEuroIs.GBP);
    });
});
