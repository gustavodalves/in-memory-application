import { Customer } from '../entities/customer/customer';

export interface CustomersRepository {
    create(customer: Customer): Promise<void>;
}
