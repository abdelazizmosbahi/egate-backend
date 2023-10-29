import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseDto } from 'src/dto/course.dto';
import { Course, CourseDocument } from 'src/models/course.models';
import { Category, CategoryDocument } from 'src/models/category.models';

// import { faker } from '@faker-js/faker';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}
  async Add(body: CourseDto) {
    const c = await this.courseModel.create(body); // creation cours
   await this.categoryModel.findByIdAndUpdate(
      body.category,
      { $push: { courses: c._id } }, // Push the course ID into the `courses` array
      { new: true },
    );
    return c;
  }
  FindAll() {
    return this.courseModel.find();
  }
  
  FindOne(id: string) {
    return this.courseModel.findById({ _id: id }).populate('category');
  }



  Update(id: string, body: CourseDto) {
    return this.courseModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.courseModel.findByIdAndRemove({ _id: id });
  }
  Search(key: string) {
    const keyword = key
      ? {
          $or: [
            { title: { $regex: key, $options: 'i' } },
            { category: { $regex: key, $options: 'i' } },
            { teacher: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return this.courseModel.find(keyword);
  }
 
  // new
  async findById(id: string): Promise<Course> {
    return this.courseModel.findById(id).exec();
  }
  // ends here
}
