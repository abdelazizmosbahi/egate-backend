import { IsNotEmpty, } from "class-validator";


export class AppointmentDto{
   
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    description: number;

    
    }
   