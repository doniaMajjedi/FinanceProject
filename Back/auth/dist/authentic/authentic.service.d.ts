import { RegisterDto } from "src/users/dto/register.dto";
import { UsersService } from "src/users/users.service";
import { LoginDto } from "src/users/dto/login.dto";
export declare class AuthenticService {
    private readonly usersService;
    constructor(usersService: UsersService);
    register({ password, email, name }: RegisterDto): Promise<{
        message: string;
    }>;
    login({ email, password }: LoginDto): Promise<{
        email: string;
    }>;
}
