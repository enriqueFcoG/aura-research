import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty({ example: 'marysol@example.com', description: 'user email' })
    email: string;

    @ApiProperty({ example: '123456', minLength: 8 })
    password: string;

    @ApiProperty({ example: 'Garcia', minLength: 3 })
    firstName: string;
    
    @ApiProperty({ example: 'Torres', minLength: 3})
    lastName: string;
}