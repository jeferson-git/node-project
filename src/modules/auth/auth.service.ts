import * as bcrypt from 'bcrypt';

import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/register/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException(`User Not Found, ${email} !!`);
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    console.log('aqui');
    if (user && isMatch) {
      const date = new Date();
      return {
        message: 'Loggin Successful ..',
        username: user.name,
        userId: user.id,
        isAdmin: user.isAdmin,
        data: new Date(date.getFullYear(), date.getMonth(), date.getDay()),
      };
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      password: user.password,
      sub: user.userId,
      isAdmin: user.isAdmin,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
