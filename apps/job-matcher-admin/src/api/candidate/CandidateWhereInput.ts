import { ComparisonListRelationFilter } from "../comparison/ComparisonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";

export type CandidateWhereInput = {
  comparisons?: ComparisonListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  jobProfile?: JobProfileWhereUniqueInput;
  name?: StringNullableFilter;
  resume?: StringNullableFilter;
};
