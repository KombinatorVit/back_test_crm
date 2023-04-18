import { Controller, Get } from "@nestjs/common";
import { usersService } from "./users.service";

@Controller("users")
export class usersController {
  constructor(private readonly usersService: usersService) {
  }

  @Get()
  getuserss() {
    return this.usersService.geruserss();
  }

}
