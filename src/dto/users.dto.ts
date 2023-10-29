import { IsEmail, IsNotEmpty, IsNumber, } from "class-validator";
import { Types } from "mongoose";


export class UserDto{

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname :string;

    @IsEmail()
    email :string;

    role :string;
    
    @IsNotEmpty()
    phone :string;

    @IsNotEmpty()
    dateofbirth : string;

    @IsNotEmpty()
    gender :string;

    courses: Types.ObjectId[];


    password :string;
    new_password: string;
    confirm_new_password: string;


    diplom: string;
    experience: string;
    cv: string;

    // @IsNotEmpty()
    // cpassword :string;
    }
   