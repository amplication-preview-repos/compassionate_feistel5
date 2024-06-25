import { StringFilter } from "../../util/StringFilter";
import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";
import { JobProfileListRelationFilter } from "../jobProfile/JobProfileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  jobProfile?: JobProfileWhereUniqueInput;
  jobProfiles?: JobProfileListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
