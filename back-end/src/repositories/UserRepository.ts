import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async findByEmail(email: string): Promise<User | undefined> {
        return this.findOne({ where: { email } });
    }

    async createUser(userData: Partial<User>): Promise<User> {
        const user = this.create(userData);
        return this.save(user);
    }

    async findAllUsers(): Promise<User[]> {
        return this.find();
    }
}