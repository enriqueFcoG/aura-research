import { Base } from "src/shared/entities/base.entity";

export class User extends Base {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}
