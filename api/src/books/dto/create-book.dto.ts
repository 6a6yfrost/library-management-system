import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, Min, Length, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 150)
  author: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 20)
  isbn: string;

  @IsInt()
  @Min(1)
  totalCopies: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  genreId: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  availableCopies?: number;
}