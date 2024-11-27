import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHabitationDto {
  @Field()  
  @IsNumber()
  numero: number; 

  @Field() 
  @IsString()
  tipo: string; 

  @Field() 
  @IsNumber()
  precio: number; 

  @Field() 
  @IsBoolean()
  disponible: boolean; 
}
