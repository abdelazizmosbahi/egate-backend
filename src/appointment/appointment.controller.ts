import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentDto } from 'src/dto/appointment.dto';


@Controller('appointment')
export class AppointmentController {
    constructor (private readonly service: AppointmentService){}
    
    
    
    @Post() 
    Add(@Body() body: AppointmentDto){
        return this.service.Add(body);
    }

    @Get() 
    FindAll(){
        return this.service.FindAll();
    }

    // @Get("/:id") 
    // FindOne(@Param('id')id: string){
    //      return this.service.FindOne(id);
    // }

    
} 
 