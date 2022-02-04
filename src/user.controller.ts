import { Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  createUser(user: UserDto): Promise<UserDto> {
    return this.userService.createUser(user);
  }

  @Post('/login')
  login(user: UserDto): Promise<UserDto> {
    return this.userService.login(user);
  }

  @Get('/get-all-users')
  getAllUsers(): Promise<UserDto[]> {
    return this.userService.findAllUsers();
  }

  @Get('/get-user-by-id')
  getUserById(emailid: string): Promise<UserDto> {
    return this.userService.getUserbyId(emailid);
  }
}
