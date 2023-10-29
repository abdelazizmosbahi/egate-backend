import { IsNotEmpty } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

export class CategoryDto {
  @IsNotEmpty()
  category_title: string;

  @IsNotEmpty()
  category_description: string;

  courses: Types.ObjectId[];
}
