import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber({ maxDecimalPlaces: 4 })
  @IsPositive()
  @Min(0)
  @Type(() => Number)
  price: number;
}
