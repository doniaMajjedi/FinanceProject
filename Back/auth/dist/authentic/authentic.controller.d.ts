import { AuthenticService } from 'src/authentic/authentic.service';
import { LoginDto } from 'src/users/dto/login.dto';
import { RegisterDto } from 'src/users/dto/register.dto';
export declare class AuthenticController {
    private readonly authService;
    constructor(authService: AuthenticService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        email: string;
    }>;
}
