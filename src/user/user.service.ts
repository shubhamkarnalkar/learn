import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository : Repository<User>){

  }

  create(createUserDto: CreateUserDto) : Promise<User>{
    let user : User = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.country = createUserDto.country;
    user.credits = createUserDto.credits;
    user.description = createUserDto.description;
    user.email = createUserDto.email;
    user.mobile = createUserDto.mobile;
    return this.userRepository.save(user);
  }

  findAll() : Promise<User[]>{
    return this.userRepository.find();
  }

  //  findOne(id: number): Promise<User>{
  //   return this.userRepository.findOne(id);
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user : User = new User();
    user.id = id;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.country = updateUserDto.country;
    user.credits = updateUserDto.credits;
    user.description = updateUserDto.description;
    user.email = updateUserDto.email;
    user.mobile = updateUserDto.mobile;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
