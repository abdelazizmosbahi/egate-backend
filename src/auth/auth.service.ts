

import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.getUser({ username });
        if (!user) return null;
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user._id }; 
        //when login is successfull it returns username and id and than redirect the user the the correct route
        // const access_token = this.jwtService.sign(payload);

        let redirectRoute = '/';
        if (user.role === 'teacher') {
            redirectRoute = '/tdashboard';
        } else if (user.role === 'student') {
            redirectRoute = '/dashboard';
        } else if (user.role === 'admin') {
            redirectRoute = '/dashb';
        }

        return {
            access_token: this.jwtService.sign(payload),
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
            phone: user.phone,
            role: user.role,
            dateofbirth: user.dateofbirth,
            gender: user.gender,
            createdAt: user.createdAt,
         redirectRoute
        };
    }

    // async logout(userId: string) {
    //     this.usersService.Update(userId, { refreshToken: null });
    //   }
      

    
}
