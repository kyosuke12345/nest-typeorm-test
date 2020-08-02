import { UsersService } from './users.service';
import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  list() {
    return this.userService.list();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.userService.findOne(id);
  }
}
