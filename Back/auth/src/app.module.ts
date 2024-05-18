import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthenticModule } from './authentic/authentic.module';
import { AuthenticController } from './authentic/authentic.controller';
import { AuthenticService } from './authentic//authentic.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'money-tracker',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthenticModule,
  ],
  controllers: [AppController, AuthenticController],
  providers: [AppService, AuthenticService],
})
export class AppModule {}
