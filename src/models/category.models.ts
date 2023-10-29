import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type CategoryDocument = Category & Document;
@Schema()
export class Category {
  @Prop({ required: true })
  category_title: string;

  @Prop({ required: true })
  category_description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Course' }] })
  courses: Types.ObjectId[];
}
export const CategorySchema = SchemaFactory.createForClass(Category);
export class CategoryModel {
  // Class implementation
}
