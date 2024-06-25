import { ComparisonCreateNestedManyWithoutCandidatesInput } from "./ComparisonCreateNestedManyWithoutCandidatesInput";
import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";

export type CandidateCreateInput = {
  comparisons?: ComparisonCreateNestedManyWithoutCandidatesInput;
  email?: string | null;
  jobProfile?: JobProfileWhereUniqueInput | null;
  name?: string | null;
  resume?: string | null;
};
