import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppointmentDto } from 'src/dto/appointment.dto';
import { Appointment, AppointmentDocument } from 'src/models/Appointment.models';


@Injectable()
export class AppointmentService {
    constructor(@InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>){}
    Add(body: AppointmentDto ){
        return this.appointmentModel.create(body);
    }
    FindAll(){
        return this.appointmentModel.find();
    }
    // FindOne(id: string){
    //     return this.appointmentModel.findOne({_id: id});
    // }
    
}
 
