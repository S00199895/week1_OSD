import { getCurrencies } from "./getCurrencies";

describe('currencies - S00199895 Mark Curran', () => {
    it('array should contain USD, GDP, EUR', () => {
        const currencies = getCurrencies();
        let arr = ['GDP', 'EUR', 'USD']
        expect(currencies.sort()).toEqual(arr.sort())

        for (let c in currencies)
        {
            expect()
        }
    });
});