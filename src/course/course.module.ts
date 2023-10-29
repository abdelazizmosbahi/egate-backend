import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from 'src/models/Course.models';
// import { Category, CategorySchema } from './category.models';
import { Category, CategorySchema, CategoryDocument } from 'src/models/category.models';

import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CategoryModel } from 'src/models/category.models';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),

    CategoryModule,
  ],
  controllers: [CourseController],
  providers: [Category,CategoryModel, CourseService],
})
export class CourseModule {}
