/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CandidateListRelationFilter } from "../../candidate/base/CandidateListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CompanyListRelationFilter } from "../../company/base/CompanyListRelationFilter";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ComparisonListRelationFilter } from "../../comparison/base/ComparisonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class JobProfileWhereInput {
  @ApiProperty({
    required: false,
    type: () => CandidateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CandidateListRelationFilter)
  @IsOptional()
  @Field(() => CandidateListRelationFilter, {
    nullable: true,
  })
  candidates?: CandidateListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CompanyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CompanyListRelationFilter)
  @IsOptional()
  @Field(() => CompanyListRelationFilter, {
    nullable: true,
  })
  companies?: CompanyListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ComparisonListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComparisonListRelationFilter)
  @IsOptional()
  @Field(() => ComparisonListRelationFilter, {
    nullable: true,
  })
  comparisons?: ComparisonListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  requirements?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { JobProfileWhereInput as JobProfileWhereInput };