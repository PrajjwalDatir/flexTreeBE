import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/userDto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/api/register')
  createUser(@Body() user: UserDto): Promise<UserDto> {
    console.log('Registering a new user : Inside the controller');
    console.log(user);
    return this.userService.createUser(user);
  }

  @Post('/api/login')
  login(@Body() user: UserDto): Promise<UserDto> {
    console.log('Logging in a user : Inside the controller');
    return this.userService.login(user);
  }

  @Get('/api/get-all-users')
  getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }

  @Get('/:username')
  getUserbyUsername(@Param('username') username: string): Promise<UserDto> {
    console.log('Fetching user by username : Inside the controller');
    return this.userService.getUserbyUsername(username);
  }
}
