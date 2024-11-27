import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, IsDate } from 'class-validator';

@InputType()
export class UpdateReservationDto {
  @Field(() => Int)
  @IsInt()
  @IsOptional()
  clientId?: number;

  @Field()
  @IsDate()
  @IsOptional()
  startDate?: Date;

  @Field()
  @IsDate()
  @IsOptional()
  endDate?: Date;

  @Field()
  @IsString()
  @IsOptional()
  status?: string;

  @Field(() => Int)
  @IsInt()
  @IsOptional()
  habitationId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  serviceId?: number;
}
