import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from 'src/dto/course.dto';

@Controller('course')

export class CourseController {
    constructor (private readonly service: CourseService){}
    
    
    
    @Post() 
    Add(@Body() body: CourseDto){
        return this.service.Add(body);
    }

    @Get() 
    FindAll(){
        return this.service.FindAll();
    }


    @Get("/:id") 
    FindOne(@Param('id')id: string){
         return this.service.FindOne(id);
    }
    
    // @Get("/:teacher") 
    // CourseByTeacher(@Param('teacher')teacher: string){
    //      return this.service.FindOne(teacher);
    // }
    // teacher id 

//     @Get('/:teacherId')
//   async getCoursesByTeacherId(@Param('teacherId') teacherId: string) {
//     return this.service.FindByTeacherId(teacherId);
//   }
//   teacher id

    @Put("/:id") 
    Update(@Param('id')id: string, @Body() body: CourseDto){
        return this.service.Update(id, body);
    }

    @Delete("/:id") 
    Delete(@Param('id')id: string){
        return this.service.Delete(id);
    }
    
    @Post('/search')
    Search(@Query('key') key){
        return this.service.Search(key);
    }
} 
 