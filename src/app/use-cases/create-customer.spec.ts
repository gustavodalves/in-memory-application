import { InMemoryCustomersRepository } from "../../in-memory/customers.in-memory";
import { CreateCustomer } from "./create-customer";

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const customerRepository = new InMemoryCustomersRepository()
    const createCustomer = new CreateCustomer(customerRepository);

    const { customer } = await createCustomer.execute({
        name: 'Gustavo Duarte Alves',
        birthDate: new Date(1995, 11, 17),
    })

    expect(customerRepository.customer).toHaveLength(1);
    expect(customerRepository.customer[0]).toBe(customer)
  });

});
