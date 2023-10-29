


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/users.models';
import { UserDto } from 'src/dto/users.dto';


@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }
    async createUser(
        firstname: string,
        lastname: string, 
        email: string, 
        username: string,
        phone: number,
        role: string, 
        dateofbirth: string, 
        gender: string, 
        password: string, 
        ): Promise<User> {
        return this.userModel.create({
            firstname,
            lastname,
            email,
            username,
            phone,
            role,
            dateofbirth,
            gender,
            password,
        });
    }
    // jdida
    async findById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
      }
    //   ends here

    async getUser(query: object ): Promise<User> {
        return this.userModel.findOne(query);
    }
            FindAll(){
                return this.userModel.find();
            }
            FindOne(id: string){
                return this.userModel.findOne({_id: id});
            }
            Update(id: string, body: UserDto){
                return this.userModel.findByIdAndUpdate(
                    {_id: id},
                    {$set: body},
                    {new: true}
                );
            }
            Delete(id: string){
             return this.userModel.findByIdAndRemove({_id: id});
        
            }
    Search(key: string){
        const keyword=key ?
        {
            $or: [
                {firstname: { $regex: key, $options:'i'}},
                {lastname: { $regex: key, $options:'i'}},
                {role: { $regex: key, $options:'i'}},
                {email: { $regex: key, $options:'i'}},
                {gender: { $regex: key, $options:'i'}},
                 



            ],
        }:{};
        return this.userModel.find(keyword);
        
    }}

