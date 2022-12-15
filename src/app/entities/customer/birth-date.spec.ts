import { BirthDate } from "./birth-date";

describe('Customer Birth Date',() => {
    it('Should be able create birth date', () => {
        const birthDate = new BirthDate(new Date(1995, 11, 17));
        expect(birthDate).toBeInstanceOf(BirthDate);
    })

    it('Should not be able create birth date before today', () => {
        expect(() => new BirthDate(new Date())).toThrow();
    })
})