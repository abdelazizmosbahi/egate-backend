// import { Injectable } from '@nestjs/common';
// import { Contact , ContactDocument} from 'src/models/contact.models';
// import { InjectModel } from '@nestjs/mongoose';
// import { ContactDto } from 'src/dto/contact.dto';
// import { Model } from 'mongoose';

// @Injectable()
// export class ContactService {
//   constructor(
//     @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
//   ) {}

//   Add(body: ContactDto): Promise<Contact> {
//     return this.contactModel.create(body);
//   }


// FindAll(){
//     return this.contactModel.find();
// }


// }

// import { Injectable } from '@nestjs/common';
// import { Contact, ContactDocument } from 'src/models/contact.models';
// import { InjectModel } from '@nestjs/mongoose';
// import { ContactDto } from 'src/dto/contact.dto';
// import { Model } from 'mongoose';

// @Injectable()
// export class ContactService {
//   constructor(
//     @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
//   ) {}

//   async Add(body: ContactDto): Promise<Contact> {
//     return this.contactModel.create(body);
//   }

//   FindAll(): Promise<Contact[]> {
//     return this.contactModel.find().exec();
//   }
// }
