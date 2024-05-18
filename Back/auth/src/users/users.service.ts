import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
@Injectable()
export class UsersService {
constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
) {}
async create(createUserDto: CreateUserDto) :Promise<User> {
    return await this.usersRepository.save(createUserDto);
}
async findOneByEmail(email: string) : Promise<User> {
    return await this.usersRepository.findOneBy({ email });
}

async findAll() : Promise<User[]>{
    return await this.usersRepository.find();
}

async findOne(id: number) : Promise<User> {
    return await this.usersRepository.findOneBy({ id });
}

async update(id:number,updateUserDto: UpdateUserDto) : Promise<User>{
    // user.service.ts
    const user = this.usersRepository.findOneBy({id});
    if (!user) {
      throw new NotFoundException();
    }
    return this.usersRepository.save(updateUserDto);
}

async remove(id:number):Promise<void>{
    await this.usersRepository.delete({ id });
}
}