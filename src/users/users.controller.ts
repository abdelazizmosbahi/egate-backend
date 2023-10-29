

import { Body, Controller, Post, Get, Param, Delete, Put, Query, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/users.models';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dto/users.dto';
// import { ChangePasswordDto } from 'src/dto/changepassword.dto';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('/signup')
    async createUser(
        
        @Body('firstname') firstname: string,
        @Body('lastname') lastname: string,
        @Body('email') email: string,
        @Body('username') username: string,
        @Body('phone') phone: number,
        @Body('role') role: string,
        @Body('dateofbirth') dateofbirth: string,
        @Body('gender') gender: string,
        @Body('password') password: string,

    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.usersService.createUser(
            firstname,
            lastname,
            email,
            username,
            phone,
            role,
            dateofbirth,
            gender,
            hashedPassword,

        );
        return result;
    }
        @Get() 
    FindAll(){
        return this.usersService.FindAll();
    }

    @Get("/:id") 
    FindOne(@Param('id')id: string){
         return this.usersService.FindOne(id);
    }
    //     @Put("/:id") 
    // Update(@Param('id')id: string, @Body() body: UserDto){
    //     return this.usersService.Update(id, body);
    // }

    @Patch('/:id')
async updateUser(
    @Param('id') id: string,
    @Body() UserDto: UserDto,
): Promise<User> {
    const { password, role } = UserDto;

    // Check if the password field is present in the request body
    if (password) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        UserDto.password = hashedPassword;
    }

    const result = await this.usersService.Update(id, UserDto);
    return result;
}

@Patch('/:id')
async changePassword(
    @Param('id') id: string,
    // @Body() changePasswordDto: ChangePasswordDto,
    @Body() UserDto: UserDto,
  ): Promise<User> {
    const { firstname, lastname, email, phone, gender, role,password  } = UserDto;

    const user = await this.usersService.findById(id);


    if (password) {
        const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    user.password = hashedPassword;

    const updatedpassword = await this.usersService.Update(id, UserDto);

    return updatedpassword;
  }
  }




    
    @Delete("/:id") 
    Delete(@Param('id')id: string){
        return this.usersService.Delete(id);
    }
    
    @Post('/search')
    Search(@Query('key') key){
        return this.usersService.Search(key);
    }
    
}