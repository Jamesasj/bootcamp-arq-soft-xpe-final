import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  price: string;
}
