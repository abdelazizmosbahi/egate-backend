import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AppointmentDocument = Appointment & Document;
@Schema()
    export class Appointment{

        @Prop({required: true})
        name: string;

        @Prop({required: true})
        email: string;

        
        @Prop({required: true})
        description: string;


    }
    export const AppointmentSchema = SchemaFactory.createForClass(Appointment)