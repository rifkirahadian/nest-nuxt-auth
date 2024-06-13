import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User> {
    const findUser = this.users.find((user) => user.username === username);
    if (!findUser) {
      throw new UnauthorizedException('User not found');
    }

    const user = new User();
    user.userId = findUser.userId;
    user.username = findUser.username;
    user.password = findUser.password;

    return user;
  }

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string; user: User }> {
    const user = await this.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
