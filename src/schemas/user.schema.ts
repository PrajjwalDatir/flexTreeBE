import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ autoIndex: false })
export class User {
  @Prop({ required: true })
  email: string;

  // Password in encrypted form
  @Prop({ required: true })
  password: string;

  // Name user wants to display
  @Prop({ required: true })
  name: string;

  // User writes about themselves
  @Prop()
  description: string;

  // The user's profile picture
  @Prop()
  picture: string;

  // List of links of type string
  @Prop([String])
  links: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
