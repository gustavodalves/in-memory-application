import { BirthDate } from './birth-date';
import { Customer } from './customer';
import { Name } from './name';

describe('Customer',() => {
    it('Should be able create customer', () => {
        const customer = new Customer({
            birthDate: new BirthDate(new Date(1995, 11, 17)),
            name: new Name('Gustavo'),
        });

        expect(customer).toBeInstanceOf(Customer);
    });
});
