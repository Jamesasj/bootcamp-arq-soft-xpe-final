import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @ApiProperty()
  nome: string;
  @IsString()
  @ApiProperty()
  descricao?: string;

  @IsNumberString()
  @ApiProperty()
  preco: number;

  @IsNumberString()
  @ApiProperty()
  quantidadeEstoque: number;
}
