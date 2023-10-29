
import { Controller, Request, Post, UseGuards, Patch, Body, ValidationPipe, Param, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
import { Res } from '@nestjs/common';
import { Response } from 'express';
import { AccessTokenGuard } from 'src/accessToken.guard';

// import { ChangePasswordDto } from 'src/dto/changepassword.dto';

@Controller()
export class AuthController {
  
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    

// @UseGuards(AccessTokenGuard)
//   @Get('logout')
//   logout(@Req() req: Request) {
//     this.authService.logout(req.users['sub']);
//   }


    

} 

