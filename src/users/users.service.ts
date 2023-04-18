import { Injectable } from "@nestjs/common";

import { userss } from "../moks";

@Injectable()
export class usersService {
  geruserss() {
    return userss;
  }
}
