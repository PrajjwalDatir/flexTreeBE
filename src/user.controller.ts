import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/userDto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/api/register')
  createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.createUser(user);
  }

  @Post('/api/login')
  login(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.login(user);
  }

  @Get('/:username')
  getUserbyUsername(@Param('username') username: string): Promise<UserDto> {
    return this.userService.getUserbyUsername(username);
  }
}
