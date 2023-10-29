import { isNumber } from "@ng-bootstrap/ng-bootstrap/util/util";
import { IsEmail, IsInt, IsNotEmpty, } from "class-validator";


export class AuthDto{

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname :string;

    @IsEmail()
    email :string;

    @IsNotEmpty()
    role :string;
    
    @IsNotEmpty()
    phone :string;

    @IsNotEmpty()
    dateofbirth : string;

    @IsNotEmpty()
    gender :string;

    @IsNotEmpty()
    password :string;

    // @IsNotEmpty()
    // cpassword :string;

    }
   