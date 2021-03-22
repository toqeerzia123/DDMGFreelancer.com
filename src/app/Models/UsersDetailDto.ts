import { Gigs } from "./Gigs";
import { Orders } from "./Orders";
import { User } from "./User";

export class UsersDetailDto {
    userInfo:User;
    gigs:Gigs[];
    orders:Orders[];
}
