import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';

import { AuthModule } from './auth/auth.module';
// import { EnrollService } from './enroll/enroll.service';
import { AppointmentModule } from './appointment/appointment.module';
import { RefreshTokenController } from './auth/RefreshToken.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),/*always in first*/
    MongooseModule.forRoot(process.env.MONGO_URI),
    // MongooseModule.forRoot('mongodb://localhost/authentication'),
    /*mongo db connect string in var .env */
    UserModule, CourseModule, CategoryModule,AuthModule, AppointmentModule],
    
  
  providers: [AuthModule, UserModule   ],
  controllers: [ RefreshTokenController, ]

})
export class AppModule {}
