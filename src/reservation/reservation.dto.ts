import { IsNumber, IsDate, IsString, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()  
export class CreateReservationDto {
  @Field()  
  @IsNumber()
  clientId: number;

  @Field() 
  @IsDate()
  startDate: Date;

  @Field()  
  @IsDate()
  endDate: Date;

  @Field()  
  @IsString()
  status: string;

  @Field()  
  @IsNumber()
  habitationId: number;

  @Field({ nullable: true })  
  @IsOptional()
  @IsNumber()
  serviceId?: number;
}

