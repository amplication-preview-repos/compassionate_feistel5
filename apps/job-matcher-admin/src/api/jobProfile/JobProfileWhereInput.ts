import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ComparisonListRelationFilter } from "../comparison/ComparisonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobProfileWhereInput = {
  candidates?: CandidateListRelationFilter;
  companies?: CompanyListRelationFilter;
  company?: CompanyWhereUniqueInput;
  comparisons?: ComparisonListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  requirements?: StringNullableFilter;
  title?: StringNullableFilter;
};
