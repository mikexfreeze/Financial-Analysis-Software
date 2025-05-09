import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    async createUser(name: string, email: string, password: string): Promise<User> {
        return await UserRepository.createUser({ name, email, password });
    }

    async getUserById(id: number): Promise<User | null> {
        return await UserRepository.findOne({ where: { id } });
    }

    async getAllUsers(): Promise<User[]> {
        return await UserRepository.findAllUsers();
    }
}