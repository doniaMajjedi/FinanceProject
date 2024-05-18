"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs = require("bcryptjs");
const users_service_1 = require("../users/users.service");
let AuthenticService = class AuthenticService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async register({ password, email, name }) {
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            throw new common_1.BadRequestException("Email already exists");
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        await this.usersService.create({
            name,
            email,
            password: hashedPassword,
        });
        return {
            message: "User created successfully",
        };
    }
    async login({ email, password }) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid email");
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Invalid password");
        }
        return {
            email: user.email,
        };
    }
};
exports.AuthenticService = AuthenticService;
exports.AuthenticService = AuthenticService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthenticService);
//# sourceMappingURL=authentic.service.js.map