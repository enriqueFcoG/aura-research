import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async register(registerDto: RegisterDto) {
    const hashPassword = await bcrypt.hash(registerDto.password, 10);
    registerDto.password = hashPassword;
    const user = await this.usersService.findByEmail(registerDto.email);
    if (user) {
      return 'User already exists';
    }
    const newUser = await this.usersService.create(registerDto);
    return newUser;
  }

  async login(loginDto: LoginDto): Promise<{access_token: string}> {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    } else {
      const payload = { sub: user.id, email: user.email };

      return { access_token: await this.jwtService.signAsync(payload) };
    }
  }
}
