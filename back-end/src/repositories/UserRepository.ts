import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export const UserRepository = AppDataSource.getRepository(User).extend({
    async findByEmail(email: string): Promise<User | null> {
        return this.findOne({ where: { email } });
    },

    async createUser(userData: Partial<User>): Promise<User> {
        const user = this.create(userData);
        return this.save(user);
    },

    async findAllUsers(): Promise<User[]> {
        return this.find();
    },
});