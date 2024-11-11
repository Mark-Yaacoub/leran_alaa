import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {

    @MinLength(3, {
        message: 'First name must be at least 3 characters long'
    })
    @IsNotEmpty({
        message: 'First name is required'
    })
    @Matches(/^[a-zA-Z]+$/, {
        message: 'First name must contain only letters'
    })
    first_name: string;

    @IsOptional()
    @IsString()
    last_name: string;

    @IsEmail()
    email: string;


    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z]).*$/, {
        message: "Please Use Strong Password with max 20 character length ..",
    })
    password: string;
}