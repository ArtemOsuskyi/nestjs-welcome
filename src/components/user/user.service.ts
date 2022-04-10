import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findUser(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save({
      username: createUserDto.username,
      password: createUserDto.password,
    });
  }

  async removeUser(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
