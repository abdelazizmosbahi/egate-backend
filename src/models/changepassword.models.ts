
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { ChangePasswordDto } from 'src/dto/users.dto';

// export type UserDocument = Changepassword & Document;

// @Schema()
// export class User {  
//         @Prop({required: true})
//         password: string;
      
//         @Prop({required: true})
//         newPassword: string;
// }

// export const ChangepasswordSchema = SchemaFactory.createForClass(Changepassword);



// 2222
// import { IsString, Matches, IsNotEmpty } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

// export class ChangePasswordDto {
//     @IsString()
//     @IsNotEmpty()
//     _id: string;

//     @IsString()
//     @IsNotEmpty()
//     // @Matches(
// // @@ -15,4 +10,4 @@ export class ChangePasswordDto {
//     // )
//     @ApiProperty()
//     readonly password: string;
// }
