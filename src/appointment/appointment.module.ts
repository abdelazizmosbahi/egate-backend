import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentService } from './appointment.service';
import { Appointment, AppointmentSchema } from 'src/models/Appointment.models';
import { AppointmentController } from './appointment.controller';
import { AppointmentDto } from 'src/dto/appointment.dto';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Appointment.name, schema: AppointmentSchema}]),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService]
})

export class AppointmentModule {}

