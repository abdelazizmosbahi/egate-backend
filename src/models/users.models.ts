import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  phone: number;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  dateofbirth: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Course' }] })
  courses: Types.ObjectId[];

  // new
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop()

diplom: string;
@Prop()

experience: string;
@Prop()

cv: string;

  // @Prop({ type: [String], default: [] })
  // enrolledCourses: string[];
  // id: string; // Add this line to define the id property

  // ends
}

export const UserSchema = SchemaFactory.createForClass(User);
