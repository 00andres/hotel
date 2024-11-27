import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateHabitationDto {
  @Field({ nullable: true })  
  @IsOptional()
  @IsNumber()
  numero?: number; 
  @Field({ nullable: true })  
  @IsOptional()
  @IsString()
  tipo?: string;

  @Field({ nullable: true })  
  @IsOptional()
  @IsNumber()
  precio?: number; 

  @Field({ nullable: true })  
  @IsOptional()
  @IsBoolean()
  disponible?: boolean; 
}
