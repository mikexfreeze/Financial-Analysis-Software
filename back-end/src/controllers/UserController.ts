import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password } = req.body;
            const user = await this.userService.createUser(name, email, password);
            return res.status(201).json(user);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            return res.status(400).json({ message: errorMessage });
        }
    }

    public async getUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUserById(Number(userId));
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(user);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            return res.status(400).json({ message: errorMessage });
        }
    }

    // 新增 login 接口
    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const user = await this.userService.getUserByEmail(email);
            if (!user || user.password !== password) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
            // 这里可以生成 token 或 session，简单返回用户信息
            return res.json({ message: "Login successful", user });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            return res.status(400).json({ message: errorMessage });
        }
    }
}