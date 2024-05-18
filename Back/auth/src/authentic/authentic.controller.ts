import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthenticService } from 'src/authentic/authentic.service';
import { LoginDto } from 'src/users/dto/login.dto';
import { RegisterDto } from 'src/users/dto/register.dto';
import { AuthGuard } from './guard/authentic.guard';

@Controller('authentic')
export class AuthenticController {
    constructor(private readonly authService: AuthenticService) {}
    @Post("register")
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }
    @HttpCode(HttpStatus.OK)
    @Post("login")
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
    /* Get('profile')
    @UseGuards(AuthGuard)
    profile(@new Request() req) {
        return 'profile';
    } */
}

