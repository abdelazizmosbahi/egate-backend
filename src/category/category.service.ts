import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDto } from 'src/dto/category.dto';
import { Category, CategoryDocument } from 'src/models/category.models';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  Add(body: CategoryDto) {
    return this.categoryModel.create(body);
  }
  async FindAll() {
    return await this.categoryModel.find().populate({
      path: 'courses',
      populate: [
        // return of the teacher who creates the course
        {
          path: 'teacher',
          select: 'firstname lastname email',
        },
        // return list of enrolled in students
        {
          path: 'students',
          select: 'firstname lastname email',
        },
      ],
      
    });
  }
  FindOne(id: string) {
    return this.categoryModel.findById({ _id: id }).populate('courses');
  }
  Update(id: string, body: CategoryDto) {
    return this.categoryModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }
  Delete(id: string) {
    return this.categoryModel.findByIdAndRemove({ _id: id });
  }
  Search(key: string) {
    const keyword = key
      ? {
          $or: [
            { category_title: { $regex: key, $options: 'i' } },
            { category: { $regex: key, $options: 'i' } },
            { teacher: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return this.categoryModel.find(keyword);
  }
}
