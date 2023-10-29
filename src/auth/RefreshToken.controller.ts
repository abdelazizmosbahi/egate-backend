import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

@Controller('refresh-token')
export class RefreshTokenController {
  @Get()
  refreshToken(@Req() request: Request, @Res() response: Response): void {
    try {
      const rf_token = request.cookies.refreshtoken;
      if (!rf_token) {
        response.status(400).json({ msg: 'Please Login or Register' });
        return;
      }
      jwt.verify(
        rf_token,
        process.env.REFRECH_TOKEN_SELECT,
        (err: any, user: any) => {
          if (err) {
            response.status(400).json({ msg: 'Please Login or Register' });
            return;
          }
          const accessToken = ({ id: user.id });
          response.json({ accessToken });
        }
      );
    } catch (error) {
      response.status(500).json({ msg: error.message });
    }
  }
}
