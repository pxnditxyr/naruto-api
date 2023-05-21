import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min( 1 )
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?: number;

}
