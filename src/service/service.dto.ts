import { IsString, IsNumber, IsBoolean } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType() 
export class CreateServiceDto {
  @Field()  
  @IsString()
  nombre: string; 

  @Field()  
  @IsString()
  descripcion: string; 

  @Field() 
  @IsNumber()
  costoAdicional: number; 

  @Field()  
  @IsBoolean()
  disponible: boolean; 
}
