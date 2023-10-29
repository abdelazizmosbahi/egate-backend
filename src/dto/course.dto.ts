import { IsNotEmpty } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

export class CourseDto {
  @IsNotEmpty()
  title: string;
  // @IsNotEmpty()
  // teacher: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  category: Types.ObjectId[];

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  start: string;

  @IsNotEmpty()
  end: string;

  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  duration: number;

  // @IsNotEmpty()
  // frequency: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  file: string;

  @IsNotEmpty()
  price: number;


  students: Types.ObjectId[];
}



// import { IsNotEmpty } from 'class-validator';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model, Types } from 'mongoose';

// export class CourseDto {
//   @IsNotEmpty()
//   title: string;
//   // @IsNotEmpty()
//   // teacher: string;

//   @IsNotEmpty()
//   description: string;

//   @IsNotEmpty()
//   category: Types.ObjectId[];

//   @IsNotEmpty()
//   type: string;

//  @IsNotEmpty()
//   price: number;  
  
//  @IsNotEmpty()
//   start_date: string;

//   @IsNotEmpty()
//   end_date: string;

//   @IsNotEmpty()
//   duration: number;

//   @IsNotEmpty()
//   frequency: string;

//   @IsNotEmpty()
//   image: string;

//   @IsNotEmpty()
//   file: string;

 


//   students: Types.ObjectId[];
// }
