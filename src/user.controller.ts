import { Controller, Get } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/create-user')
  createUser(user: UserDto): Promise<UserDto> {
    return this.userService.createUser(user);
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
