import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from 'src/dto/category.dto';

@Controller('category')

export class CategoryController {
    constructor (private readonly service: CategoryService){}
    
    
    
    @Post() 
    Add(@Body() body: CategoryDto){
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

    @Put("/:id") 
    Update(@Param('id')id: string, @Body() body: CategoryDto){
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
 