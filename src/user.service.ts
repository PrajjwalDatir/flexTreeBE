import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/userDto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async createUser(createUserDto: UserDto): Promise<User> {
    console.log('Registering a new user : Inside the service');
    const createdUser = new this.UserModel(createUserDto);
    return await createdUser.save();
  }

  // Login function which takes emailid and password as input & sends back the user object
  async login(user: UserDto): Promise<User> {
    console.log('Logging in a user : Inside the service');
    return await this.UserModel.findOne({
      email: user.email,
      password: user.password,
    }).exec();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }

  async getUserbyUsername(username: string): Promise<UserDto> {
    const user = await this.UserModel.findOne({ username }).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return {
      username: user.username,
      picture: user.picture,
      description: user.description,
      links: user.links,
    };
  }
}
