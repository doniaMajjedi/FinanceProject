import { Module } from '@nestjs/common';
import { UsersModule } from "src/users/users.module";
import { AuthenticController } from './authentic.controller';
import { AuthenticService } from './authentic.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';
@Module({
  controllers: [ AuthenticController],
  providers: [ AuthenticService]
})
export class AuthenticModule {}

@Module({
imports: [UsersModule, JwtModule.register({
  global: true,
  secret: jwtConstants.secret,
  signOptions: { expiresIn: "1d" },
  }),
  ],
controllers: [AuthenticController],
providers: [AuthenticService],
})
export class AuthModule {}
