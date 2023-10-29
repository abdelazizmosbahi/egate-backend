import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type CourseDocument = Course & Document;
@Schema()
export class Course {
  
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'user' })
  teacher: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Types.ObjectId[];

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  start: string;

  @Prop({ required: true })
  end: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  duration: number;

  //   @Prop({ required: true })
  // frequency: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  file: string;

  @Prop({ required: true })
  price: number;
  //new
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'user' }] })
  students: Types.ObjectId[];
  

  // @Prop({ type: [String], default: [] })
  // students: string[];
  //ends here
}
export const CourseSchema = SchemaFactory.createForClass(Course);



// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Types } from 'mongoose';

// export type CourseDocument = Course & Document;
// @Schema()
// export class Course {
  
//   @Prop({ required: true })
//   title: string;

//   @Prop({ required: true })
//   description: string;

//   @Prop({ type: Types.ObjectId, ref: 'user' })
//   teacher: Types.ObjectId;

//   @Prop({ type: Types.ObjectId, ref: 'Category' })
//   category: Types.ObjectId[];

//   @Prop({ required: true })
//   type: string;

//   @Prop({ required: true })
//   price: number;

//   @Prop({ required: true })
//   start_date: string;

//   @Prop({ required: true })
//   end_date: string;

//   @Prop({ required: true })
//   duration: number;

//   @Prop({ required: true })
//   frequency: string;

//   @Prop({ required: true })
//   image: string;

//   @Prop({ required: true })
//   file: string;


//   //new
//   @Prop({ type: Date, default: Date.now })
//   createdAt: Date;

//   @Prop({ type: [{ type: Types.ObjectId, ref: 'user' }] })
//   students: Types.ObjectId[];
  

//   // @Prop({ type: [String], default: [] })
//   // students: string[];
//   //ends here
// }
// export const CourseSchema = SchemaFactory.createForClass(Course);
