import { Name } from "./name";

import { expect, describe, it } from "@jest/globals";

describe('Customer Name',() => {
    it('Should be able create name', () => {
        const name = new Name('Gustavo Duarte Alves');
        expect(name).toBeInstanceOf(Name);
    })

    it('Should not be able create name with less than 5 characters', () => {
        expect(() => new Name('Gust')).toThrow();
    })
})