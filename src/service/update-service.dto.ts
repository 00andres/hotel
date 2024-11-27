import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateServiceDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string; 

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  descripcion?: string; 

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  costoAdicional?: number; 

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  disponible?: boolean; 
}
