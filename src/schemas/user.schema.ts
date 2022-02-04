import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ autoIndex: false })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  // Password in encrypted form
  @Prop({ required: true })
  password: string;

  // Name user wants to display
  @Prop({ default: '' })
  name: string;

  // User writes about themselves
  @Prop({ default: '' })
  description: string;

  // The user's profile picture
  @Prop({ default: '' })
  picture: string;

  // List of links of type string
  @Prop({ default: [] })
  links: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
