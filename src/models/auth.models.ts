import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AuthDocument = Auth & Document;
@Schema()
    export class Auth{
        
        @Prop({required: true})
        firstname: string;
      
        @Prop({required: true})
        lastname: string;
      
        @Prop({required: true, unique: true})
        email: string;
      
        @Prop({required: true, unique: true})
        username: string;

        @Prop({required: true, unique: true})
        phone: number;
         
        @Prop({required: true})
        role: string;
      
        @Prop({required: true})
        dateofbirth: string;
      
        @Prop({required: true})
        gender: string;
      
        @Prop({required: true})
        password: string;
      
        // @Prop({required: true})
        // cpassword: string;
    }
    export const AuthSchema = SchemaFactory.createForClass(Auth)