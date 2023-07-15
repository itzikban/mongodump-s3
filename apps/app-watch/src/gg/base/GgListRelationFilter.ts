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
import { GgWhereInput } from "./GgWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GgListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GgWhereInput,
  })
  @ValidateNested()
  @Type(() => GgWhereInput)
  @IsOptional()
  @Field(() => GgWhereInput, {
    nullable: true,
  })
  every?: GgWhereInput;

  @ApiProperty({
    required: false,
    type: () => GgWhereInput,
  })
  @ValidateNested()
  @Type(() => GgWhereInput)
  @IsOptional()
  @Field(() => GgWhereInput, {
    nullable: true,
  })
  some?: GgWhereInput;

  @ApiProperty({
    required: false,
    type: () => GgWhereInput,
  })
  @ValidateNested()
  @Type(() => GgWhereInput)
  @IsOptional()
  @Field(() => GgWhereInput, {
    nullable: true,
  })
  none?: GgWhereInput;
}
export { GgListRelationFilter as GgListRelationFilter };