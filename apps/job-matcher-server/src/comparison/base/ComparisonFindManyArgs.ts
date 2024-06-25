/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComparisonWhereInput } from "./ComparisonWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ComparisonOrderByInput } from "./ComparisonOrderByInput";

@ArgsType()
class ComparisonFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ComparisonWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ComparisonWhereInput, { nullable: true })
  @Type(() => ComparisonWhereInput)
  where?: ComparisonWhereInput;

  @ApiProperty({
    required: false,
    type: [ComparisonOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ComparisonOrderByInput], { nullable: true })
  @Type(() => ComparisonOrderByInput)
  orderBy?: Array<ComparisonOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ComparisonFindManyArgs as ComparisonFindManyArgs };
