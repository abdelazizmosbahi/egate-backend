import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/models/category.models';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';


@Module({
  imports:[
    MongooseModule.forFeature([{name:Category.name, schema: CategorySchema}]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, Category ],
})
export class CategoryModule {}
