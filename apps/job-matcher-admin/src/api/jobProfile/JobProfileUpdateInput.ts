import { CandidateUpdateManyWithoutJobProfilesInput } from "./CandidateUpdateManyWithoutJobProfilesInput";
import { CompanyUpdateManyWithoutJobProfilesInput } from "./CompanyUpdateManyWithoutJobProfilesInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ComparisonUpdateManyWithoutJobProfilesInput } from "./ComparisonUpdateManyWithoutJobProfilesInput";

export type JobProfileUpdateInput = {
  candidates?: CandidateUpdateManyWithoutJobProfilesInput;
  companies?: CompanyUpdateManyWithoutJobProfilesInput;
  company?: CompanyWhereUniqueInput | null;
  comparisons?: ComparisonUpdateManyWithoutJobProfilesInput;
  description?: string | null;
  requirements?: string | null;
  title?: string | null;
};
