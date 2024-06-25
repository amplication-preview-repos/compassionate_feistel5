import { CandidateCreateNestedManyWithoutJobProfilesInput } from "./CandidateCreateNestedManyWithoutJobProfilesInput";
import { CompanyCreateNestedManyWithoutJobProfilesInput } from "./CompanyCreateNestedManyWithoutJobProfilesInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ComparisonCreateNestedManyWithoutJobProfilesInput } from "./ComparisonCreateNestedManyWithoutJobProfilesInput";

export type JobProfileCreateInput = {
  candidates?: CandidateCreateNestedManyWithoutJobProfilesInput;
  companies?: CompanyCreateNestedManyWithoutJobProfilesInput;
  company?: CompanyWhereUniqueInput | null;
  comparisons?: ComparisonCreateNestedManyWithoutJobProfilesInput;
  description?: string | null;
  requirements?: string | null;
  title?: string | null;
};
