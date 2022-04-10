import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-dto";
import { UserService } from "./user.service";
import { DeleteResult } from "typeorm";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(":id")
  async getOne(@Param() params): Promise<User> {
    console.log(params.id);
    return this.userService.findUser(params.id);
  }

  @Post("create")
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Delete("delete/:id")
  async remove(@Param("id") id: number): Promise<DeleteResult> {
    return this.userService.removeUser(id);
  }
}
