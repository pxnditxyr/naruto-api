import { IsInt, IsPositive, IsString, Min } from "class-validator"

export class CreateCharacterDto {
  @IsInt()
  @IsPositive()
  @Min( 1 )
  top: number

  @IsString()
  name: string

  @IsInt()
  @IsPositive()
  jutsus: number

  @IsString()
  surname: string

  @IsString()
  village: string
}
