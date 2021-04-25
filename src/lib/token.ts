// require('dotenv').config();
import 'dotenv/config'
import { UserInfoEntity } from '../entity/UserInfoEntity';
import { sign } from 'jsonwebtoken';

export const refreshToken = (user: UserInfoEntity) => {
  return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: '7d',
  });
};

export const createToken = (user: UserInfoEntity) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '7d',
  });
};
